import { MongoClient } from 'mongodb';
import { config } from 'dotenv';
import fs from 'fs';
import pdfParse from 'pdf-parse';

config(); // Load environment variables from .env file

const MONGODB_URI = process.env.MONGODB_URI;
const DATABASE_NAME = process.env.DATABASE_NAME;
const COLLECTION_NAME = process.env.COLLECTION_NAME;

const client = new MongoClient(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

export async function extractTextFromPDF(filePath: string): Promise<string> {
  try {
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdfParse(dataBuffer);
    return data.text;
  } catch (error) {
    console.error('Error extracting text from PDF:', error);
    throw error;
  }
}

export async function saveReportToDb(filename: string, fileSize: number, fileType: string, textData: string): Promise<void> {
  try {
    await client.connect();
    const database = client.db(DATABASE_NAME);
    const collection = database.collection(COLLECTION_NAME);
    await collection.insertOne({
      filename,
      size: fileSize,
      type: fileType,
      textData,
      createdAt: new Date(),
    });
  } catch (error) {
    console.error('Error saving report to MongoDB:', error);
    throw error;
  } finally {
    await client.close();
  }
}
