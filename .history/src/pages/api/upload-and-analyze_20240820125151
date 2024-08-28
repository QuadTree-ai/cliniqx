import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import { MongoClient, GridFSBucket } from 'mongodb';
import { createReadStream } from 'fs';
import { promises as fs } from 'fs'; // Import promises from 'fs'
import path from 'path';
import pdfParse from 'pdf-parse';
import OpenAI from 'openai';

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

// Helper function to interact with OpenAI API to analyze problems and severity from extracted text
const fetchOpenaiAnalysis = async (textData: string): Promise<any> => {
  const completion = await openai.completions.create({
    model: 'text-davinci-003',
    prompt: `Analyze the following medical report and identify any potential health issues. Specify the problem, the associated body part, and its severity (low, moderate, high):\n\n${textData}`,
    max_tokens: 1000,
  });

  return completion.choices[0].text.trim();
};

// API handler to upload files, extract text, and analyze using OpenAI
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const db = await connectToDatabase();
    const bucket = new GridFSBucket(db, { bucketName: 'uploads' });

    // Parse the form data
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

    // Analyze the extracted text using OpenAI
    const openaiResponse = await fetchOpenaiAnalysis(textData);

    // Extract problems, body parts, and severity from OpenAI's response
    const insights = parseOpenaiResponse(openaiResponse);

    // Optionally, store the file metadata in MongoDB
    const result = await db.collection('uploads').insertOne({
      filename: file.originalFilename,
      filepath: filePath,
      size: file.size,
      type: file.mimetype,
      insights: insights, // Store insights for future use
      createdAt: new Date(),
    });

    // Remove the local file after successful upload to MongoDB
    await fs.unlink(filePath);

    return res.status(200).json({
      message: 'File uploaded and analyzed successfully',
      insights,
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

// Helper function to parse OpenAI response to extract insights
const parseOpenaiResponse = (openaiResponse: string): Array<{ part: string; problem: string; severity: 'low' | 'moderate' | 'high' }> => {
  const insights: Array<{ part: string; problem: string; severity: 'low' | 'moderate' | 'high' }> = [];

  const lines = openaiResponse.split('\n').filter(line => line.trim().length > 0);
  for (const line of lines) {
    const match = line.match(/^(.*?): (.*?)(, severity: (low|moderate|high))$/i);
    if (match) {
      const [, part, problem, , severity] = match;
      insights.push({ part, problem, severity: severity as 'low' | 'moderate' | 'high' });
    }
  }

  return insights;
};
