// src/pages/api/upload-and-analyze.ts

import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import { createReadStream, unlink } from 'fs';
import { promises as fs } from 'fs';
import pdfParse from 'pdf-parse';
import { fetchOpenaiAnalysis } from '../../utils/fetchOpenaiAnalysis'; // Adjust the path if needed
import { getDb } from '../../lib/mongodb'; // Adjust the path if needed
import { setProgress } from './progress'; // Import setProgress

// Formidable setup for handling file uploads
interface FormidableResult {
  fields: formidable.Fields;
  files: formidable.Files;
}

const parseForm = (req: NextApiRequest): Promise<FormidableResult> => {
  const form = new formidable.IncomingForm();
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });
};

// PDF text extraction
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

// API route handler
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const db = await getDb();
    const { files } = await parseForm(req);

    if (!files.file || (Array.isArray(files.file) && files.file.length === 0)) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const file = Array.isArray(files.file) ? files.file[0] : files.file;
    const filePath = file.filepath;
    const fileStream = createReadStream(filePath);

    // Update progress before starting text extraction
    setProgress(10);

    const textData = await extractTextFromPDF(fileStream);

    // Update progress after text extraction
    setProgress(50);

    const analysis = await fetchOpenaiAnalysis(textData);

    // Optionally, store file metadata and analysis in MongoDB
    await db.collection('uploads').insertOne({
      filename: file.originalFilename,
      filepath: filePath,
      size: file.size,
      type: file.mimetype,
      analysis,
      createdAt: new Date(),
    });

    // Update progress after storing data
    setProgress(80);

    await fs.unlink(filePath);  // Clean up uploaded file

    // Final progress update
    setProgress(100);

    res.status(200).json({ insights: analysis });
  } catch (error) {
    console.error('Server error:', error);
    if (error instanceof Error) {
      res.status(500).json({ message: 'Internal server error', error: error.message });
    } else {
      res.status(500).json({ message: 'Internal server error', error: 'Unknown error' });
    }
  }
}
