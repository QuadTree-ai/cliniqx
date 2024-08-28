// src/lib/mongodb.ts

import { MongoClient, MongoClientOptions } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your MongoDB URI to .env.local");
}

const uri: string = process.env.MONGODB_URI;
const options: MongoClientOptions = {}; // Use MongoClientOptions for better type safety

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// Add global type declaration to avoid TypeScript issues
declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so that the MongoDB connection is cached
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, avoid global variables
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
