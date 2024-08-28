import type { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import fs from 'fs';
import pdfParse from 'pdf-parse';
import { fetchOpenaiAnalysis, handleApiError } from '../../utils/openaiService';
import { getDb } from '../../lib/mongodb'; // Adjust path as needed
import { setProgress } from './progress'; // Adjust path as needed

// Disable the default body parser to handle file streams
export const config = {
  api: {
    bodyParser: false,
  },
};

// Handle form parsing
const parseForm = (req: NextApiRequest): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
  const form = formidable({
    keepExtensions: true,
    maxFileSize: 5 * 1024 * 1024, // Limit file size to 5 MB
    allowEmptyFiles: false,
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

    // Ensure the 'reports' collection exists and insert the report
    await db.collection('reports').insertOne({
      filename: file.originalFilename,
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

    res.status(200).json({ insights: analysis.choices[0].text });
  } catch (error) {
    console.error('Server error:', error);
    setProgress(0); // Reset on error
    
    // Type assertion for error
    if (error instanceof Error) {
      handleApiError(error);
    } else {
      handleApiError(new Error('Unknown error occurred'));
    }
    
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
