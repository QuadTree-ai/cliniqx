import type { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import fs from 'fs';
import pdfParse from 'pdf-parse';
import { getDb } from '../../lib/mongodb';
import { ObjectId } from 'mongodb';
import { analyzeAndSimplifyData } from '../../utils/AIservices';

export const config = {
  api: {
    bodyParser: false,
  },
};

const parseForm = (req: NextApiRequest): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
  const form = new formidable.IncomingForm({
    keepExtensions: true,
    maxFileSize: 5 * 1024 * 1024, // 5 MB
    allowEmptyFiles: false,
  });

  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
};

const extractTextFromPDF = async (filePath: string): Promise<string> => {
  const dataBuffer = fs.readFileSync(filePath);
  const data = await pdfParse(dataBuffer);
  return data.text;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { files, fields } = await parseForm(req);
    if (!files.file || Array.isArray(files.file) && files.file.length === 0) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const file = Array.isArray(files.file) ? files.file[0] : files.file;
    const filePath = file.filepath;
    if (!filePath) {
      return res.status(400).json({ message: 'File path is missing' });
    }

    const textData = await extractTextFromPDF(filePath);
    if (!fields.reportId || !ObjectId.isValid(fields.reportId)) {
      return res.status(400).json({ message: 'Invalid or missing reportId' });
    }

    const reportId = fields.reportId; // Correctly using reportId from fields
    const insights = await analyzeAndSimplifyData(reportId, ['analyze']); // Assuming this function is adjusted to handle textData

    await db.collection('reports').insertOne({
      filename: file.originalFilename,
      size: file.size,
      type: file.mimetype,
      textData,
      insights,
      createdAt: new Date(),
    });

    fs.unlinkSync(filePath); // Ensure to clean up the file system

    res.status(200).json({ insights });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}