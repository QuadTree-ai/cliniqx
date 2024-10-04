import { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '@/lib/mongodb';
import { Collection } from 'mongodb';

interface DashboardData {
  recentTests: any[];
  invoices: any[];
  // Add other data types as needed
}

async function fetchCollectionData(collection: Collection, limit: number = 5) {
  return collection.find().sort({ date: -1 }).limit(limit).toArray();
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).setHeader('Allow', ['GET']).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const { db } = await connectToDatabase();
    
    const dashboardData: DashboardData = {
      recentTests: await fetchCollectionData(db.collection('tests')),
      invoices: await fetchCollectionData(db.collection('invoices')),
      // Add other data fetches here
    };

    res.status(200).json(dashboardData);
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    res.status(500).json({ error: 'Error fetching dashboard data' });
  }
}
