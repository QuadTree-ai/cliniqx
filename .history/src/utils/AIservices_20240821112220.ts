// src/utils/AIservices.ts

import fetchVertexAnalysis from './vertexService';
import fetchAnthropicAnalysis from './anthropicService';
import fetchOpenaiAnalysis from './openaiService';
import { ChatOpenAI } from '@langchain/openai';
import { getMedicalReportData } from './dataService';

// Custom type definitions based on assumed knowledge of the response structure
interface ChatResponse {
  choices: Array<{ text: string }>;
}

const AI_SERVICES = [
  { name: 'OpenAI', func: fetchOpenaiAnalysis },
  { name: 'Vertex AI', func: fetchVertexAnalysis },
  { name: 'Anthropic', func: fetchAnthropicAnalysis },
  { name: 'LangChain', func: (text: string) => {
    const model = new ChatOpenAI({
      model: 'gpt-3.5-turbo-0125',
      temperature: 0,
    });

    // Assume the generate method returns a promise of any type; use type assertion for response
    return model.generate([[{ text }]] as unknown as any).then((response: any) => {
      // Use a type assertion here to handle the structure
      const castedResponse = response as ChatResponse;
      if (castedResponse.choices && castedResponse.choices.length > 0) {
        return castedResponse.choices[0].text;
      }
      throw new Error('Unexpected response structure from LangChain.');
    }).catch(err => { throw err; });
  }},
];

export async function analyzeReport(reportId: string): Promise<string> {
  const reportData = await getMedicalReportData(reportId);
  let result = '';

  for (const service of AI_SERVICES) {
    try {
      result = await service.func(reportData);
      if (result) break; // Exit loop on success
    } catch (error) {
      console.error(`${service.name} analysis failed:`, error);
    }
  }

  if (!result) {
    throw new Error('All AI services failed to analyze the report.');
  }

  return result;
}
