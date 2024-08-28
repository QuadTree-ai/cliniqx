import formidable, { IncomingForm } from 'formidable';
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import pdfParse from 'pdf-parse';
import { fetchOpenaiAnalysis } from '../../utils/fetchOpenaiAnalysis'; // Adjust path as needed
import { getDb } from '../../lib/mongodb'; // Adjust path as needed
import { setProgress } from './progress'; // Adjust path as needed

// Handle form parsing
const parseForm = (req: NextApiRequest): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
  const form = new IncomingForm({
    // Specify options here
    // Note: `uploadDir` and `keepExtensions` are not used
    // `uploadDir` default location is used, you can manage file storage as needed
    // Temporary files are stored in default location
    keepExtensions: true,
  });

  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      resolve({ fields, files });
    });
  });
};

// Extract text from PDF
const extractTextFromPDF = async (filePath: string): Promise<string> => {
  const dataBuffer = fs.readFileSync(filePath);
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

    // Update progress before starting text extraction
    setProgress(10);

    const textData = await extractTextFromPDF(filePath);

    // Update progress after text extraction
    setProgress(50);

    const analysis = await fetchOpenaiAnalysis(textData);

    // Read file into buffer and convert to base64
    const fileBinary = fs.readFileSync(filePath);
    const fileBase64 = fileBinary.toString('base64');

    // Ensure the 'reports' collection exists and insert the report
    await db.collection('reports').insertOne({
      filename: file.originalFilename,
      fileBase64, // Store file as base64 string
      size: file.size,
      type: file.mimetype,
      analysis,
      createdAt: new Date(),
    });

    // Update progress after storing data
    setProgress(80);

    // Clean up uploaded file
    fs.unlinkSync(filePath);

    // Final progress update
    setProgress(100);

    res.status(200).json({ insights: analysis });
  } catch (error) {
    console.error('Server error:', error);
    setProgress(0); // Reset on error
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
