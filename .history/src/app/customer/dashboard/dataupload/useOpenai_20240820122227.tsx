import { useState } from 'react';
import OpenAI from 'openai';

const useOpenai = () => {
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const fetchResponse = async (prompt: string) => {
    setLoading(true);
    setError(null);
    try {
      const completion = await openai.chat.completions.create({
        model: 'gpt-4',
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: prompt },
        ],
      });

      if (completion.choices?.length > 0) {
        const messageContent = completion.choices[0]?.message?.content ?? '';
        setResponse(messageContent);
      } else {
        setError('No response from OpenAI.');
      }
    } catch (error: any) {
      setError('Failed to fetch data from OpenAI: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return { response, loading, error, fetchResponse };
};

export default useOpenai;
