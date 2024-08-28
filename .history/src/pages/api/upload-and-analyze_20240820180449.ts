import formidable, { IncomingForm } from 'formidable';
import type { NextApiRequest, NextApiResponse } from 'next';
import { createReadStream } from 'fs';
import pdfParse from 'pdf-parse';
import { fetchOpenaiAnalysis } from '../../utils/fetchOpenaiAnalysis'; // Adjust path as needed
import { getDb, getGridFSBucket } from '../../lib/mongodb'; // Adjust path as needed
import { setProgress } from './progress'; // Adjust path as needed

// Handle form parsing
const parseForm = (req: NextApiRequest): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
  const form = new IncomingForm();
  form.keepExtensions = true; // Keep file extensions
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
    const { files } = await parseForm(req);

    // Check if a file was uploaded
    const file = Array.isArray(files.file) ? files.file[0] : files.file;
    if (!file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const filePath = file.filepath;
    const fileStream = createReadStream(filePath);
    const gridFSBucket = await getGridFSBucket();

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

    // Save file to GridFS
    const uploadStream = gridFSBucket.openUploadStream(file.originalFilename, {
      contentType: file.mimetype,
      metadata: {
        size: file.size,
        analysis,
        createdAt: new Date(),
      },
    });
    fileStream.pipe(uploadStream);

    uploadStream.on('finish', async () => {
      // Ensure the 'reports' collection exists
      const db = await getDb();
      await db.collection('reports').insertOne({
        filename: file.originalFilename,
        fileId: uploadStream.id,
        size: file.size,
        type: file.mimetype,
        analysis,
        createdAt: new Date(),
      });

      // Update progress after storing data
      updateProgress(80);

      // Final progress update
      updateProgress(100);

      res.status(200).json({ insights: analysis });
    });

    uploadStream.on('error', (err) => {
      console.error('GridFS upload error:', err);
      res.status(500).json({ message: 'Internal Server Error' });
    });

  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
