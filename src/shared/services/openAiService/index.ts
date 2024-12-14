import { dotEnvService } from '@/shared/services/dotEnvService';
import { MBTI_RESPONSE_FORMAT } from '@/shared/services/openAiService/format';
import OpenAI from 'openai';
import { ChatCompletionMessageParam } from 'openai/src/resources/index.js';

const openai = new OpenAI({
  organization: dotEnvService.getOpenAiOrganization(),
  project: dotEnvService.getOpenAiProject(),
  apiKey: dotEnvService.getOpenAiKey(),
});

export class OpenAIService {
  private messages: ChatCompletionMessageParam[] = [];

  public system(message: string) {
    this.messages.push({ role: 'system', content: message });
    return this;
  }

  public user(message: string) {
    this.messages.push({ role: 'user', content: message });
    return this;
  }

  public async chat() {
    const stream = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: this.messages,
      response_format: {
        type: 'json_schema',
        json_schema: MBTI_RESPONSE_FORMAT,
      },
    });

    return stream;
  }
}
