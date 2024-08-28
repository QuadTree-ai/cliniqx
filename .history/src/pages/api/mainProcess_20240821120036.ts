import type { NextApiRequest, NextApiResponse } from 'next';
import { analyzeAndSimplifyData } from '../../utils/AIservices';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { reportId, services } = req.body;

    if (typeof reportId !== 'string' || !Array.isArray(services) || !services.every(s => typeof s === 'string')) {
      return res.status(400).json({ message: 'Invalid request data' });
    }

    const result = await analyzeAndSimplifyData(reportId, services);
    res.status(200).json(result);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
