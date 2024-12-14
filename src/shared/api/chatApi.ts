import { API } from '@/shared/api/api';

class ChatApi extends API {
  public async chat() {
    return this.get('/api/chat');
  }
}

export const chatApi = new ChatApi();
