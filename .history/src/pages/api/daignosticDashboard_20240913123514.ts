import { NextApiRequest, NextApiResponse } from 'next';
import { getDb } from '@/lib/mongodb';
import { Collection } from 'mongodb';

interface DashboardData {
  recentTests: any[];
  invoices: any[];
  testTypeDistribution: any[];
  revenue: any[];
  patientAgeDistribution: any[];
  patientStats: {
    testsConducted: number;
    patientsSeen: number;
  } | null;
}

async function fetchCollectionData(collection: Collection, limit: number = 5) {
  return collection.find().sort({ date: -1 }).limit(limit).toArray();
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).setHeader('Allow', ['GET']).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const db = await getDb();
    
    const dashboardData: DashboardData = {
      recentTests: await fetchCollectionData(db.collection('tests')),
      invoices: await fetchCollectionData(db.collection('invoices')),
      testTypeDistribution: await db.collection('tests').aggregate([
        { $group: { _id: '$testType', count: { $sum: 1 } } },
        { $sort: { count: -1 } },
        { $limit: 5 }
      ]).toArray(),
      revenue: await db.collection('invoices').aggregate([
        { $group: { _id: { $month: '$date' }, total: { $sum: '$amount' } } },
        { $sort: { _id: 1 } }
      ]).toArray(),
      patientAgeDistribution: await db.collection('patients').aggregate([
        { $group: { _id: { $floor: { $divide: ['$age', 10] } }, count: { $sum: 1 } } },
        { $sort: { _id: 1 } }
      ]).toArray(),
      patientStats: await db.collection('stats').findOne({ type: 'patientStats' })
    };

    res.status(200).json(dashboardData);
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    res.status(500).json({ error: 'Error fetching dashboard data' });
  }
}
