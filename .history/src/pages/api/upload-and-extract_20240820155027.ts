import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import { MongoClient, GridFSBucket } from 'mongodb';
import { createReadStream } from 'fs';
import path from 'path';
import pdfParse from 'pdf-parse'; // Library for extracting text from PDFs
import OpenAI from 'openai'; // Correct import for the OpenAI client

// Initialize OpenAI API
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Disable the default body parser to handle file streams
export const config = {
  api: {
    bodyParser: false,
  },
};

const MONGODB_URI = process.env.MONGODB_URI as string;
const MONGODB_DB_NAME = 'reportData';

let client: MongoClient | null = null;

const connectToDatabase = async () => {
  if (!client) {
    client = new MongoClient(MONGODB_URI);
    await client.connect();
  }
  return client.db(MONGODB_DB_NAME);
};

// Helper function to interact with OpenAI API for summarization
const fetchOpenaiSummary = async (textData: string): Promise<string> => {
  const completion = await openai.completions.create({
    model: 'text-davinci-003',
    prompt: `Summarize the following text:\n\n${textData}`,
    max_tokens: 150,
  });

  return completion.choices[0].text.trim();
};

// API handler to upload files to MongoDB, extract text, and use OpenAI
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const db = await connectToDatabase();
    const bucket = new GridFSBucket(db, { bucketName: 'uploads' });

    const { fields, files } = await parseForm(req);

    const file = Array.isArray(files.file) ? files.file[0] : files.file;
    if (!file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const filePath = file.filepath;
    const filename = file.originalFilename || path.basename(filePath);

    const fileStream = createReadStream(filePath);

    // Extract text from the PDF
    const textData = await extractTextFromPDF(fileStream);

    // Use OpenAI to summarize the extracted text
    const summary = await fetchOpenaiSummary(textData);

    return res.status(200).json({
      message: 'File uploaded and analyzed successfully',
      filename,
      summary,
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

// Helper function to extract text from a PDF file
const extractTextFromPDF = async (fileStream: any): Promise<string> => {
  const dataBuffer = await pdfParse(fileStream);
  return dataBuffer.text; // Extracted text from the PDF
};
