import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import { MongoClient, GridFSBucket } from 'mongodb';
import { Readable } from 'stream';

// Disable the default body parser to handle file streams
export const config = {
  api: {
    bodyParser: false,
  },
};

// MongoDB URI (should be loaded from the environment)
const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB_NAME = 'reportData'; // Replace with your database name

let client: MongoClient;

const connectToDatabase = async () => {
  if (!client) {
    client = new MongoClient(MONGODB_URI);
    await client.connect();
  }
  return client.db(MONGODB_DB_NAME);
};

// API handler to upload files to MongoDB using GridFS
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const db = await connectToDatabase();
    const bucket = new GridFSBucket(db, { bucketName: 'uploads' });

    // Parse the form using formidable
    const { fields, files } = await parseForm(req);

    const file = Array.isArray(files.file) ? files.file[0] : files.file;
    if (!file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const filename = file.originalFilename;
    const contentType = file.mimetype;

    // Create a readable stream from the uploaded file
    const fileStream = Readable.from(await fs.readFile(file.filepath));

    // Upload file to GridFS
    const uploadStream = bucket.openUploadStream(filename, {
      contentType,
    });

    fileStream.pipe(uploadStream).on('finish', async () => {
      return res.status(200).json({
        message: 'File uploaded successfully',
        fileId: uploadStream.id,
        filename,
      });
    }).on('error', (error) => {
      console.error('Error uploading file to GridFS:', error);
      return res.status(500).json({ message: 'Error uploading file to MongoDB' });
    });
  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

// Helper function to parse form data using formidable
const parseForm = (req: NextApiRequest): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
  const form = formidable({
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
