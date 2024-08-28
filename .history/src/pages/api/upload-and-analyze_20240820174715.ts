import formidable, { IncomingForm } from 'formidable';
import type { NextApiRequest, NextApiResponse } from 'next';
import { createReadStream, unlink } from 'fs';
import { promises as fs } from 'fs';
import pdfParse from 'pdf-parse';
import { fetchOpenaiAnalysis } from '../../utils/fetchOpenaiAnalysis';
import { getDb } from '../../lib/mongodb';
import { setProgress } from './progress';

const parseForm = (req: NextApiRequest): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
  const form = new IncomingForm();
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      resolve({ fields, files });
    });
  });
};

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

    setProgress(10); // Initial progress update

    const textData = await extractTextFromPDF(fileStream);

    setProgress(50); // After text extraction

    const analysis = await fetchOpenaiAnalysis(textData);

    await db.collection('uploads').insertOne({
      filename: file.originalFilename,
      filepath: filePath,
      size: file.size,
      type: file.mimetype,
      analysis,
      createdAt: new Date(),
    });

    setProgress(80); // After storing data

    await fs.unlink(filePath); // Clean up uploaded file

    setProgress(100); // Final progress update

    res.status(200).json({ insights: analysis });
  } catch (error) {
    console.error('Server error:', error);
    setProgress(0); // Reset progress on error
    res.status(500).json({ message: 'Internal server error', error: error instanceof Error ? error.message : 'Unknown error' });
  }
}
