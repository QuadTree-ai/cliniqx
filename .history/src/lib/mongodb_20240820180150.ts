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
if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// Function to get the database
export async function getDb() {
  const client = await clientPromise;
  return client.db('cliniqx'); // Specify your database name here
}

// Function to check and create the 'reports' collection if it does not exist
export async function ensureReportsCollection() {
  const db = await getDb();
  const collections = await db.listCollections({ name: 'reports' }).toArray();

  if (collections.length === 0) {
    // Collection does not exist, create it
    await db.createCollection('reports');
    console.log('Created the "reports" collection');
  } else {
    console.log('The "reports" collection already exists');
  }
}

export default clientPromise;
