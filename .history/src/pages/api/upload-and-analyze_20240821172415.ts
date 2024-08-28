import { NextApiRequest, NextApiResponse } from 'next';
import { parseForm } from '../../lib/formidableParse';
import { getDb } from '../../lib/mongodb';
import { extractTextFromPDF } from '../../lib/pdfUtils';
import { analyzeAndSimplifyData } from '../../utils/AIservices';
import { uploadToGridFS } from '../../lib/gridfsUpload';
import fs, { createReadStream } from 'fs';

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed, POST required' });
    }

    try {
        const db = await getDb();
        const { files } = await parseForm(req);
        const file = Array.isArray(files.file) ? files.file[0] : files.file;

        if (!file) {
            return res.status(400).json({ message: 'No file uploaded, please provide a file' });
        }

        const filePath = file.filepath;
        const fileStream = createReadStream(filePath);

        try {
            const fileId = await uploadToGridFS(db, fileStream, file.originalFilename || 'default_filename', file.mimetype || 'application/octet-stream');
            const textData = await extractTextFromPDF(filePath);
            const insights = await analyzeAndSimplifyData(textData, ['analyze']);
            await db.collection('reports').insertOne({
                fileId,
                filename: file.originalFilename,
                size: file.size,
                type: file.mimetype,
                insights,
                createdAt: new Date(),
            });

            res.status(200).json({ message: 'File processed and insights generated successfully', insights });
        } finally {
            fileStream.close();
            fs.unlink(filePath, err => {
                if (err) console.error(`Error deleting file ${filePath}: ${err}`);
            });
        }
    } catch (error: unknown) { // Use a type guard to check the type of the error.
        console.error('Error during file upload and analysis:', error);
        if (error instanceof Error) {
            res.status(500).json({ message: 'Internal server error', error: error.message });
        } else {
            res.status(500).json({ message: 'Internal server error', error: 'An unknown error occurred' });
        }
    }
}
