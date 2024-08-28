// src/pages/api/upload-progress.ts

import type { NextApiRequest, NextApiResponse } from 'next';

let progress = 0; // Example variable, replace with your actual progress tracking logic

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json({ progress });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}

// You'll need to set the actual `progress` variable based on your file processing logic
