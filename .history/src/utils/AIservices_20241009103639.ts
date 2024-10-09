// src/utils/AIservices.ts

import fetchVertexAnalysis from './vertexService';
import fetchAnthropicAnalysis from './anthropicService';
import fetchOpenaiAnalysis from './openaiService';
import { ChatOpenAI } from '@langchain/openai';
import { getMedicalReportData } from './dataService';

interface ChatResponse {
  choices: Array<{ text: string }>;
}

interface AnalysisResults {
  [key: string]: string | object; // This provides an index signature for any string key.
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
    return model.generate([[{ text }]] as unknown as any).then((response: any) => {
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
      if (result) break;
    } catch (error) {
      console.error(`${service.name} analysis failed:`, error);
    }
  }

  if (!result) {
    throw new Error('All AI services failed to analyze the report.');
  }

  return result;
}

export async function analyzeAndSimplifyData(reportId: string, services: string[]): Promise<AnalysisResults> {
  const reportData = await getMedicalReportData(reportId);
  const results: AnalysisResults = {};

  for (const service of services) {
    try {
      switch (service) {
        case 'analyze':
          results[service] = await analyzeReport(reportId);
          break;
        case 'simplify':
          results[service] = "Simplified data: " + reportData;
          break;
        default:
          console.warn(`Service "${service}" is not supported.`);
          results[service] = `Service "${service}" not recognized`;
          break;
      }
    } catch (error: unknown) {
      console.error(`Error processing service "${service}":`, error);
      if (error instanceof Error) {
        results[service] = `Error: ${error.message}`;
      } else {
        results[service] = `An unknown error occurred`;
      }
    }
  }

  return results;
}
