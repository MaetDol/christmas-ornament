import { dotEnvService } from '@/shared/services/dotEnvService';
import OpenAI from 'openai';

const openai = new OpenAI({
  organization: dotEnvService.getOpenAiOrganization(),
  project: dotEnvService.getOpenAiProject(),
  apiKey: dotEnvService.getOpenAiKey(),
});

class OpenAIService {
  public async chat() {
    console.log(dotEnvService.getOpenAiKey());
    console.log(dotEnvService.getOpenAiProject());

    const stream = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: 'What is the meaning of life?' },
      ],
    });
    return stream;
  }
}

export const openAiService = new OpenAIService();
