// src/pages/api/upload-and-analyze.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { parseForm } from '../../lib/formidableParse';
import { getDb } from '../../lib/mongodb';
import { extractTextFromPDF } from '../../lib/pdfUtils';
import { analyzeAndSimplifyData } from '../../utils/AIservices';
import { uploadToGridFS } from '../../lib/gridfsUpload';
import fs from 'fs';

export const config = {
    api: {
        bodyParser: false, // Necessary for handling file uploads
    },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed, POST required.' });
    }

    try {
        const db = await getDb();
        const { files, fields } = await parseForm(req);

        if (!files.file) {
            return res.status(400).json({ message: 'No file uploaded, please provide a file.' });
        }

        const file = Array.isArray(files.file) ? files.file[0] : files.file;
        const filePath = file.filepath;
        const fileStream = fs.createReadStream(filePath);

        // Validate reportId if part of your process
        if (!fields.reportId || !ObjectId.isValid(fields.reportId.toString())) {
            return res.status(400).json({ message: 'Invalid or missing report ID.' });
        }

        const fileId = await uploadToGridFS(db, fileStream, file.originalFilename || 'default_filename', file.mimetype || 'application/octet-stream');

        const textData = await extractTextFromPDF(filePath);
        const insights = await analyzeAndSimplifyData(textData, ['analyze']); // Assumes textData processing

        await db.collection('reports').insertOne({
            fileId,
            reportId: fields.reportId, // Ensure reportId is correctly managed
            filename: file.originalFilename,
            size: file.size,
            type: file.mimetype,
            insights,
            createdAt: new Date(),
        });

        res.status(200).json({ message: 'File uploaded and insights generated successfully', insights });
    } catch (error) {
        console.error('Error during file processing:', error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
}
