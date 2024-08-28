// src/pages/api/upload-progress.ts

import type { NextApiRequest, NextApiResponse } from 'next';

let progress = 0; // Initialize progress variable

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json({ progress });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}

export function setProgress(value: number) {
  progress = value;
}
