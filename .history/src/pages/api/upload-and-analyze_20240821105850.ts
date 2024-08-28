import type { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import fs from 'fs';
import { extractTextFromPDF, saveReportToDb } from '../../utils/extractData';
import fetchOpenaiAnalysis from '../../utils/openaiService';

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

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { files } = await parseForm(req);

    if (!files.file || (Array.isArray(files.file) && files.file.length === 0)) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const file = Array.isArray(files.file) ? files.file[0] : files.file;
    const filePath = file.filepath;

    const textData = await extractTextFromPDF(filePath);

    const insights = await fetchOpenaiAnalysis(textData);

    await saveReportToDb(file.originalFilename, file.size, file.mimetype, textData);

    fs.unlinkSync(filePath);

    res.status(200).json({ insights });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
