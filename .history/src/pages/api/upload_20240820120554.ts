import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable'; // Correct import
import { promises as fs } from 'fs';
import path from 'path';
import { getDb } from '@/lib/mongodb';

// Disable the default body parser to handle file streams
export const config = {
  api: {
    bodyParser: false,
  },
};

// The handler for file uploads
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { files } = await parseForm(req); // Parse the form and files

    const file = Array.isArray(files.file) ? files.file[0] : files.file; // Get the first file if it's an array
    if (!file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    // Validate file type (allow only specific formats)
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png'];
    if (!allowedTypes.includes(file.mimetype || '')) {
      return res.status(400).json({ message: 'Invalid file type. Only PDF and JPEG/PNG files are allowed.' });
    }

    const filePath = file.filepath;

    try {
      const db = await getDb(); // Get the connected database

      // Save file metadata to the database
      const result = await db.collection('uploads').insertOne({
        filename: file.originalFilename,
        filepath: filePath,
        size: file.size,
        type: file.mimetype,
        createdAt: new Date(),
      });

      // Optionally remove the file from the local folder after successful upload to DB
      await fs.unlink(filePath);

      return res.status(200).json({
        message: 'File uploaded successfully',
        fileId: result.insertedId,
        filename: file.originalFilename,
        size: file.size,
      });
    } catch (dbError) {
      console.error('Error saving file metadata to the database: ', dbError);
      return res.status(500).json({ message: 'Error saving file metadata to the database' });
    }
  } catch (error) {
    console.error('Server error: ', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

// Helper function to parse form data
const parseForm = (req: NextApiRequest): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
  const form = formidable({
    uploadDir: path.join(process.cwd(), '/uploads'),
    keepExtensions: true,
    maxFileSize: 5 * 1024 * 1024, // Limit file size to 5 MB
    allowEmptyFiles: false,
  });

  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });
};
