// src/pages/api/progress.ts
import type { NextApiRequest, NextApiResponse } from 'next';

// Simulate a function that gets the progress status
const getProgress = async (): Promise<number> => {
  // Replace with your actual logic to fetch progress
  return 50; // Example progress percentage
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const progress = await getProgress();
    res.status(200).json({ progress });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
