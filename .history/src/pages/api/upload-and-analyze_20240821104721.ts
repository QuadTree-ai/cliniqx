import type { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import fs from 'fs';
import pdfParse from 'pdf-parse';
import fetchOpenaiAnalysis from '../../utils/openaiService';
import fetchLangchainAnalysis from '../../utils/langchainService'; // Create this service as shown below
import { getDb } from '../../lib/mongodb'; // Adjust path as needed

export const config = {
  api: {
    bodyParser: false,
  },
};

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
    const db = await getDb();
    const { files } = await parseForm(req);

    if (!files.file || (Array.isArray(files.file) && files.file.length === 0)) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const file = Array.isArray(files.file) ? files.file[0] : files.file;
    const filePath = file.filepath;

    const textData = await extractTextFromPDF(filePath);

    // Fetch analysis from OpenAI
    const openaiInsights = await fetchOpenaiAnalysis(textData);

    // Fetch analysis from LangChain
    const langchainInsights = await fetchLangchainAnalysis(textData);

    // Save the report and analysis to MongoDB
    await db.collection('reports').insertOne({
      filename: file.originalFilename,
      size: file.size,
      type: file.mimetype,
      openaiInsights,
      langchainInsights,
      createdAt: new Date(),
    });

    fs.unlinkSync(filePath);

    res.status(200).json({ openaiInsights, langchainInsights });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}