// src/pages/api/upload-and-analyze.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { IncomingForm, Fields, Files } from 'formidable';
import { createReadStream, unlink } from 'fs';
import { promises as fs } from 'fs';
import pdfParse from 'pdf-parse';
import { fetchOpenaiAnalysis } from '../../utils/fetchOpenaiAnalysis';
import { getDb } from '../../lib/mongodb';
import { setProgress } from './upload-progress'; // Ensure this function exists

const form = new IncomingForm({
  uploadDir: './uploads',
  keepExtensions: true,
});

const extractTextFromPDF = async (fileStream: NodeJS.ReadableStream): Promise<string> => {
  const dataBuffer = await new Promise<Buffer>((resolve, reject) => {
    const chunks: Buffer[] = [];
    fileStream.on('data', (chunk) => chunks.push(chunk));
    fileStream.on('end', () => resolve(Buffer.concat(chunks)));
    fileStream.on('error', reject);
  });
  const data = await pdfParse(dataBuffer);
  return data.text;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  form.parse(req, async (err, fields: Fields, files: Files) => {
    if (err) {
      console.error('Form parsing error:', err);
      return res.status(400).json({ message: 'Error parsing form data' });
    }

    if (!files.file || (Array.isArray(files.file) && files.file.length === 0)) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const file = Array.isArray(files.file) ? files.file[0] : files.file;
    const filePath = file.filepath;
    const fileStream = createReadStream(filePath);

    let uploadedBytes = 0;
    const totalBytes = file.size;
    fileStream.on('data', (chunk) => {
      uploadedBytes += chunk.length;
      const percent = Math.round((uploadedBytes / totalBytes) * 100);
      setProgress(percent);
    });

    try {
      const textData = await extractTextFromPDF(fileStream);
      const analysis = await fetchOpenaiAnalysis(textData);

      const db = await getDb();
      await db.collection('uploads').insertOne({
        filename: file.originalFilename,
        filepath: filePath,
        size: file.size,
        type: file.mimetype,
        analysis,
        createdAt: new Date(),
      });

      await fs.unlink(filePath); 
      setProgress(0);
      res.status(200).json({ insights: analysis });
    } catch (error) {
      console.error('Processing error:', error);

      // Type guard to check if error is an instance of Error
      if (error instanceof Error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
      } else {
        res.status(500).json({ message: 'Internal server error', error: 'Unknown error' });
      }
    }
  });
}
