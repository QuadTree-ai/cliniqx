import { MongoClient, MongoClientOptions, Db } from 'mongodb';

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('Please define the MONGODB_URI environment variable in .env.local');
}

const options: MongoClientOptions = {
  maxPoolSize: 10,
  connectTimeoutMS: 5000,
  socketTimeoutMS: 30000,
};

let clientPromise: Promise<MongoClient>;

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = new MongoClient(uri, options).connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  clientPromise = new MongoClient(uri, options).connect();
}

export async function getDb(): Promise<Db> {
  const client = await clientPromise;
  return client.db('cliniqx');
}

export async function ensureCollection(collectionName: string): Promise<void> {
  const db = await getDb();
  try {
    const collections = await db.listCollections({ name: collectionName }).toArray();
    if (collections.length === 0) {
      await db.createCollection(collectionName);
      console.log(`Created the "${collectionName}" collection`);
    } else {
      console.log(`The "${collectionName}" collection already exists`);
    }
  } catch (error) {
    console.error(`Error checking or creating the "${collectionName}" collection:`, error);
    throw error;
  }
}

export async function initializeCollections(): Promise<void> {
  const requiredCollections = ['reports', 'tests', 'invoices', 'patients', 'stats'];
  for (const collection of requiredCollections) {
    await ensureCollection(collection);
  }
}

initializeCollections().catch(console.error);

export default clientPromise;
