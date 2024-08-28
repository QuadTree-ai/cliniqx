import formidable from 'formidable';
import fs from 'fs';
import pdfParse from 'pdf-parse';
import { NextApiRequest, NextApiResponse } from 'next';
import { getDb } from '../../lib/mongodb'; // Adjust the path if needed
import { fetchOpenaiAnalysis } from '../../utils/fetchOpenaiAnalysis'; // Adjust the path if needed

// Define types
interface FormidableResult {
  fields: formidable.Fields;
  files: formidable.Files;
}

// Parse form data
const parseForm = (req: NextApiRequest): Promise<FormidableResult> => {
  const form = new formidable.IncomingForm(); // Ensure correct version usage
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) {
        reject(err);
      } else {
        resolve({ fields, files });
      }
    });
  });
};

// Extract text from PDF
const extractTextFromPDF = async (filePath: string): Promise<string> => {
  const dataBuffer = await fs.promises.readFile(filePath);
  const data = await pdfParse(dataBuffer);
  return data.text;
};

// Handle errors
const handleError = (res: NextApiResponse, error: unknown) => {
  console.error('Server error:', error);

  if (error instanceof Error) {
    res.status(500).json({ message: 'Internal server error', error: error.message });
  } else {
    res.status(500).json({ message: 'Internal server error', error: 'Unknown error' });
  }
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

    const textData = await extractTextFromPDF(filePath);
    const analysis = await fetchOpenaiAnalysis(textData);

    // Store file metadata and analysis in MongoDB
    await db.collection('uploads').insertOne({
      filename: file.originalFilename,
      filepath: filePath,
      size: file.size,
      type: file.mimetype,
      analysis,
      createdAt: new Date(),
    });

    // Clean up uploaded file
    await fs.promises.unlink(filePath);

    res.status(200).json({ insights: analysis });
  } catch (error) {
    handleError(res, error);
  }
}
