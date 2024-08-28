import { MongoClient, MongoClientOptions, Db } from 'mongodb';

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
export async function getDb(): Promise<Db> {
  const client = await clientPromise;
  return client.db('cliniqx'); // Specify your database name here
}

// Function to ensure the 'reports' collection exists
export async function ensureReportsCollection(): Promise<void> {
  const db = await getDb();
  const collectionName = 'reports';

  try {
    const collections = await db.listCollections({ name: collectionName }).toArray();
    
    if (collections.length === 0) {
      // Collection does not exist, create it
      await db.createCollection(collectionName);
      console.log(`Created the "${collectionName}" collection`);
    } else {
      console.log(`The "${collectionName}" collection already exists`);
    }
  } catch (error) {
    console.error(`Error checking or creating the "${collectionName}" collection:`, error);
    throw error; // Re-throw the error after logging
  }
}

// Ensure the 'reports' collection is created when the module is loaded
(async () => {
  try {
    await ensureReportsCollection();
  } catch (error) {
    console.error('Error during initial collection setup:', error);
  }
})();

export default clientPromise;
