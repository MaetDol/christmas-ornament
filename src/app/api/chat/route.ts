import { openAiService } from '@/shared/services/openAiService';

export async function GET(request: Request) {
  return Response.json(await openAiService.chat());
}
