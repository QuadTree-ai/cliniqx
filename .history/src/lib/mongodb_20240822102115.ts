// src/lib/mongodb.ts

import { MongoClient, Db } from 'mongodb';

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error('Please define the MONGODB_URI environment variable in .env.local');
}

let dbInstance: Db | null = null;

export async function getDb(): Promise<Db> {
  if (dbInstance) {
    return dbInstance;
  }
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    maxPoolSize: 10,
  });
  await client.connect();
  dbInstance = client.db('cliniqx');
  return dbInstance;
}
