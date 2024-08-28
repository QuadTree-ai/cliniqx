import { MongoClient, MongoClientOptions } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("Please define the MONGODB_URI environment variable in .env.local");
}

const options: MongoClientOptions = {
  maxPoolSize: 10, // Set the maximum pool size to manage multiple connections efficiently
};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// Global variable declaration to avoid recreating the client in development
declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

// Singleton pattern to ensure a single MongoClient instance
if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export default clientPromise;
