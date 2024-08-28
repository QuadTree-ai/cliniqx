import formidable, { IncomingForm } from 'formidable';
import type { NextApiRequest, NextApiResponse } from 'next';
import { createReadStream, unlink } from 'fs';
import { promises as fsPromises } from 'fs';
import pdfParse from 'pdf-parse';
import { fetchOpenaiAnalysis } from '../../utils/fetchOpenaiAnalysis'; // Adjust path as needed
import { getDb } from '../../lib/mongodb'; // Adjust path as needed
import { setProgress } from './progress'; // Adjust path as needed

// Handle form parsing
const parseForm = (req: NextApiRequest): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
  const form = new IncomingForm();
  form.uploadDir = './'; // Ensure files are saved in the root or specify a directory
  form.keepExtensions = true; // Preserve file extensions if required

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

    // Check if a file was uploaded
    const file = Array.isArray(files.file) ? files.file[0] : files.file;
    if (!file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const filePath = file.filepath;
    const fileStream = createReadStream(filePath);

    // Initialize progress tracking
    let progress = 0;
    const updateProgress = (newProgress: number) => {
      progress = newProgress;
      setProgress(progress); // Update progress in the system
    };

    // Update progress before starting text extraction
    updateProgress(10);

    const textData = await extractTextFromPDF(fileStream);

    // Update progress after text extraction
    updateProgress(50);

    const analysis = await fetchOpenaiAnalysis(textData);

    // Ensure the 'reports' collection exists
    console.log('Inserting into MongoDB reports collection:', {
      filename: file.originalFilename,
      filepath: filePath,
      size: file.size,
      type: file.mimetype,
      analysis,
      createdAt: new Date(),
    });

    await db.collection('reports').insertOne({
      filename: file.originalFilename,
      filepath: filePath,
      size: file.size,
      type: file.mimetype,
      analysis,
      createdAt: new Date(),
    });

    // Update progress after storing data
    updateProgress(80);

    // Clean up uploaded file if it was uploaded
    if (filePath) {
      await fsPromises.unlink(filePath);
    }

    // Final progress update
    updateProgress(100);

    res.status(200).json({ insights: analysis });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
