// mongodb.ts
import { MongoClient, MongoClientOptions, Db } from 'mongodb';

interface MongoConfig {
  uri: string;
  dbName: string;
  collections: readonly string[];
}

const config: MongoConfig = {
  uri: process.env.MONGODB_URI ?? '',
  dbName: 'cliniqx',
  collections: ['reports', 'tests', 'invoices', 'patients', 'stats'] as const,
} as const;

if (!config.uri) {
  throw new Error('MONGODB_URI environment variable is not defined');
}

const options: MongoClientOptions = {
  maxPoolSize: 10,
  connectTimeoutMS: 5000,
  socketTimeoutMS: 30000,
  serverSelectionTimeoutMS: 5000,
  retryWrites: true,
  w: 'majority',
};

class MongoConnection {
  private static instance: MongoConnection;
  private client: MongoClient | null = null;
  private promiseClient: Promise<MongoClient> | null = null;

  private constructor() {}

  static getInstance(): MongoConnection {
    if (!MongoConnection.instance) {
      MongoConnection.instance = new MongoConnection();
    }
    return MongoConnection.instance;
  }

  async connect(): Promise<MongoClient> {
    if (this.client) return this.client;
    
    if (!this.promiseClient) {
      this.promiseClient = new MongoClient(config.uri, options)
        .connect()
        .then(client => {
          this.client = client;
          return client;
        })
        .catch(error => {
          this.promiseClient = null;
          throw new Error(`MongoDB connection failed: ${error.message}`);
        });
    }

    return this.promiseClient;
  }

  async getDb(): Promise<Db> {
    const client = await this.connect();
    return client.db(config.dbName);
  }

  async close(): Promise<void> {
    if (this.client) {
      await this.client.close();
      this.client = null;
      this.promiseClient = null;
    }
  }
}

// Singleton instance
const mongoConnection = MongoConnection.getInstance();

export async function ensureCollection(collectionName: string): Promise<void> {
  const db = await mongoConnection.getDb();
  try {
    const collections = await db.listCollections({ name: collectionName }).toArray();
    if (collections.length === 0) {
      await db.createCollection(collectionName);
      console.log(`Created collection: ${collectionName}`);
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    throw new Error(`Failed to ensure collection ${collectionName}: ${errorMessage}`);
  }
}

export async function initializeCollections(): Promise<void> {
  try {
    await Promise.all(config.collections.map(ensureCollection));
    console.log('All collections initialized successfully');
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Failed to initialize collections:', errorMessage);
    throw error;
  }
}

export const getDb = () => mongoConnection.getDb();
export default mongoConnection;