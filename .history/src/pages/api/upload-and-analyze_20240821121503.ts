import { NextApiRequest, NextApiResponse } from 'next';
import { parseForm } from '../../lib/formidableParse';
import { getDb } from '../../lib/mongodb';
import { extractTextFromPDF } from '../../lib/pdfUtils'; // Import the utility function
import { analyzeAndSimplifyData } from '../../utils/AIservices';
import { uploadToGridFS } from '../../lib/gridfsUpload';
import { createReadStream } from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        const db = await getDb();
        const { files } = await parseForm(req);
        const file = Array.isArray(files.file) ? files.file[0] : files.file;

        if (!file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        const filePath = file.filepath;
        const fileStream = createReadStream(filePath);
        const fileId = await uploadToGridFS(db, fileStream, file.originalFilename || 'defaultName', file.mimetype || 'application/octet-stream');

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

        res.status(200).json({ insights });
    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
