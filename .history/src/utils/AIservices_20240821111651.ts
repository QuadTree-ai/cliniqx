// src/utils/AIservices.ts

import fetchVertexAnalysis from './vertexService';
import fetchAnthropicAnalysis from './anthropicService';
import fetchOpenaiAnalysis from './openaiService';
import { ChatOpenAI } from '@langchain/openai';
import { getMedicalReportData } from './dataService'; // Import from new file

// Define a priority order for AI services
const AI_SERVICES = [
  { name: 'OpenAI', func: fetchOpenaiAnalysis },
  { name: 'Vertex AI', func: fetchVertexAnalysis },
  { name: 'Anthropic', func: fetchAnthropicAnalysis },
  { name: 'LangChain', func: text => new ChatOpenAI({
        model: 'gpt-3.5-turbo-0125',
        temperature: 0,
      }).generate({ prompt: text }).then(response => response.choices[0].text).catch(err => { throw err; })
  },
];

export async function analyzeReport(reportId: string): Promise<string> {
  const reportData = await getMedicalReportData(reportId);
  let result = '';

  // Try each service in order until one succeeds
  for (const service of AI_SERVICES) {
    try {
      result = await service.func(reportData);
      break; // Stop once a service is successful
    } catch (error) {
      console.error(`${service.name} analysis failed:`, error);
    }
  }

  // If no service succeeded, throw an error
  if (!result) {
    throw new Error('All AI services failed to analyze the report.');
  }

  return result;
}
