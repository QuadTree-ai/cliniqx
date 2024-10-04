import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '@/utils/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const { db } = await connectToDatabase();
      
      // Fetch data from MongoDB collections
      const recentTests = await db.collection('tests').find().sort({ date: -1 }).limit(5).toArray();
      const invoices = await db.collection('invoices').find().sort({ date: -1 }).limit(5).toArray();
      // Fetch other required data...

      res.status(200).json({
        recentTests,
        invoices,
        // Include other fetched data...
      });
    } catch (error) {
      res.status(500).json({ error: 'Error fetching dashboard data' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
