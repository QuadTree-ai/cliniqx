// src/utils/vertexService.ts

import axios from 'axios';
import { config } from 'dotenv';

config(); // Load environment variables from .env file

const VERTEX_API_URL = 'https://us-central1-aiplatform.googleapis.com/v1/projects/YOUR_PROJECT_ID/locations/us-central1/publishers/google/models/gemini-1.5-pro:predict'; // Update with the correct endpoint

interface VertexResponse {
  predictions: Array<{
    content: string;
  }>;
}

export const fetchVertexAnalysis = async (prompt: string): Promise<string> => {
  try {
    const response = await axios.post<VertexResponse>(VERTEX_API_URL, {
      instances: [{ prompt }],
      parameters: {
        temperature: 0.7, // Adjust temperature for randomness
        maxOutputTokens: 1000, // Adjust token count as needed
        stopSequences: ['\n'], // Optional: add stop sequences if needed
      },
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.VERTEX_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    console.log('Vertex AI API Response:', response.data);
    return response.data.predictions[0]?.content || 'No analysis provided.';
  } catch (error) {
    console.error('Error fetching Vertex AI analysis:', error);
    if (error instanceof Error) {
      return `Error: ${error.message}`;
    }
    return 'An unknown error occurred.';
  }
};

export default fetchVertexAnalysis;
