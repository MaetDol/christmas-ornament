import { API } from '@/shared/api/api';
import { ChatResponse } from '@/shared/types/chatApi';

class ChatApi extends API {
  public async chat(id: number, userResponse: string): Promise<ChatResponse> {
    const res = await this.post<string>('/api/chat', {
      body: JSON.stringify({
        id,
        userResponse,
      }),
    });

    return JSON.parse(res);
  }
}

export const chatApi = new ChatApi();
