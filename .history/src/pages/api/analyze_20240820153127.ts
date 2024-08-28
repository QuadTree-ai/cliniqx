// src/pages/api/analyze.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { text } = req.body;

  try {
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `Analyze the following medical report and identify any potential health issues. Specify the organ, disease, and severity (low, moderate, high):\n\n${text}`,
      max_tokens: 1000,
    });

    const result = completion.data.choices[0].text.trim();
    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json({ message: 'Error processing OpenAI request', error });
  }
}
