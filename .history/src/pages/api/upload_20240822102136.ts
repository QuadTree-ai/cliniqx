// src/pages/api/upload.ts

import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import { getDb } from '../../lib/mongodb';
import { GridFSBucket } from 'mongodb';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
};

const uploadFileToGridFS = async (db: Db, file: formidable.File): Promise<string> => {
  const bucket = new GridFSBucket(db, { bucketName: 'uploads' });
  const stream = fs.createReadStream(file.filepath);
  const uploadStream = bucket.openUploadStream(file.originalFilename, {
    contentType: file.mimetype || 'application/octet-stream',
  });
  stream.pipe(uploadStream);
  return new Promise((resolve, reject) => {
    uploadStream.on('finish', () => resolve(uploadStream.id.toString()));
    uploadStream.on('error', reject);
  });
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const form = formidable({ multiples: true, keepExtensions: true });
  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ error: 'Could not parse form data' });
    }
    if (!files || Object.keys(files).length === 0) {
      return res.status(400).json({ error: 'No files uploaded' });
    }

    const file = files.file instanceof Array ? files.file[0] : files.file;
    const filePath = file.filepath;
    const validTypes = ['application/pdf', 'image/jpeg', 'image/png'];
    if (!validTypes.includes(file.mimetype)) {
      fs.unlinkSync(filePath); // Clean up the file immediately
      return res.status(400).json({ error: 'Invalid file type' });
    }

    try {
      const db = await getDb();
      const fileId = await uploadFileToGridFS(db, file);
      fs.unlinkSync(filePath); // Clean up the file after uploading
      res.status(200).json({ message: 'File uploaded successfully', fileId });
    } catch (error) {
      fs.unlinkSync(filePath); // Ensure cleanup on failure
      res.status(500).json({ error: 'Error uploading file' });
    }
  });
}
