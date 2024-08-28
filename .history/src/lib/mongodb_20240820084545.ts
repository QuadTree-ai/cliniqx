// src/lib/mongodb.ts
import { MongoClient, MongoClientOptions } from 'mongodb';

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('Please define the MONGODB_URI environment variable in .env.local');
}

const options: MongoClientOptions = {
  maxPoolSize: 10, // Pool size optimization
};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// Declare global variable to prevent multiple connections in development
declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

// Use cached client connection in development, connect fresh in production
if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export default clientPromise;
