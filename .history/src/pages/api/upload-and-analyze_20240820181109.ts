import formidable, { IncomingForm } from 'formidable';
import type { NextApiRequest, NextApiResponse } from 'next';
import { createReadStream, promises as fs } from 'fs';
import pdfParse from 'pdf-parse';
import { fetchOpenaiAnalysis } from '../../utils/fetchOpenaiAnalysis'; // Adjust path as needed
import { getDb } from '../../lib/mongodb'; // Adjust path as needed
import { setProgress } from './progress'; // Adjust path as needed

// Handle form parsing
const parseForm = (req: NextApiRequest): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
  const form = new IncomingForm({
    // You can specify options here if needed
    // Note: uploadDir and keepExtensions are not available in the latest version
  });

  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      resolve({ fields, files });
    });
  });
};

// Extract text from PDF
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

    // Update progress before starting text extraction
    setProgress(10);

    const textData = await extractTextFromPDF(createReadStream(filePath));

    // Update progress after text extraction
    setProgress(50);

    const analysis = await fetchOpenaiAnalysis(textData);

    // Convert file to binary and store it in MongoDB
    const fileBinary = await fs.readFile(filePath);

    // Ensure the 'reports' collection exists
    await db.collection('reports').insertOne({
      filename: file.originalFilename,
      fileBinary: fileBinary.toString('base64'), // Store file as base64 string
      size: file.size,
      type: file.mimetype,
      analysis,
      createdAt: new Date(),
    });

    // Update progress after storing data
    setProgress(80);

    await fs.unlink(filePath); // Clean up uploaded file

    // Final progress update
    setProgress(100);

    res.status(200).json({ insights: analysis });
  } catch (error) {
    console.error('Server error:', error);
    setProgress(0); // Reset on error
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
