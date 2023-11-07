import type { UserModelSchema } from '@fastgpt/global/support/user/type';
import OpenAI from 'openai';

export const openaiBaseUrl = process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1';
export const baseUrl = process.env.ONEAPI_URL || openaiBaseUrl;

export const systemAIChatKey = process.env.CHAT_API_KEY || '';

interface Test {
  key?: string;
  baseUrl?: string;
  model?: string;
}
export const getAIApi = (props?: Test, timeout = 6000) => {
  return new OpenAI({
    apiKey: systemAIChatKey,
    baseURL: `https://xm-ai.openai.azure.com/openai/deployments/${props?.model || 'gpt-35'}`,
    defaultQuery: { 'api-version': '2023-07-01-preview' },
    defaultHeaders: { 'api-key': systemAIChatKey },
    timeout,
    maxRetries: 2
  });
};
