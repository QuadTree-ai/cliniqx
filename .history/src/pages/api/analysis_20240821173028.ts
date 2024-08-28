// src/pages/api/upload-and-analyze.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { parseForm } from '../../lib/formidableParse';
import { getDb } from '../../lib/mongodb';
import { extractTextFromPDF } from '../../lib/pdfUtils';
import { analyzeAndSimplifyData } from '../../utils/AIservices';
import { uploadToGridFS } from '../../lib/gridfsUpload';
import fs from 'fs';
import { ObjectId } from 'mongodb';

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed, POST required.' });
    }

    try {
        const { fields, files } = await parseForm(req);
        if (!files.file) {
            return res.status(400).json({ message: 'No file uploaded, please provide a file.' });
        }

        const file = Array.isArray(files.file) ? files.file[0] : files.file;
        const filePath = file.filepath;
        const fileStream = fs.createReadStream(filePath);

        // Validate reportId field
        const reportId = fields.reportId;
        if (!reportId || !ObjectId.isValid(reportId.toString())) {
            return res.status(400).json({ message: 'Invalid or missing report ID. Please provide a valid ID.' });
        }

        const db = await getDb();
        const fileId = await uploadToGridFS(db, fileStream, file.originalFilename || 'default_filename', file.mimetype || 'application/octet-stream');
        const textData = await extractTextFromPDF(filePath);
        const insights = await analyzeAndSimplifyData(textData, ['analyze']);

        await db.collection('reports').insertOne({
            fileId,
            reportId, // Confirm that reportId is used correctly
            filename: file.originalFilename,
            size: file.size,
            type: file.mimetype,
            insights,
            createdAt: new Date(),
        });

        res.status(200).json({ message: 'File processed and insights generated successfully', insights });
    } catch (error: unknown) {
        console.error('Error during file upload and analysis:', error);
        if (error instanceof Error) {
            res.status(500).json({ message: 'Internal server error', error: error.message });
        } else {
            res.status(500).json({ message: 'Internal server error', error: 'An unknown error occurred' });
        }
    }
}
