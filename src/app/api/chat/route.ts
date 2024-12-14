import { OpenAIService } from '@/shared/services/openAiService';
import { getQuestion } from '@/shared/utils/getQuestion';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { id, userResponse } = await request.json();

  const question = getQuestion(id);
  if (!question) {
    return NextResponse.error();
  }
  if (typeof userResponse !== 'string') {
    return NextResponse.error();
  }
  if (userResponse.length > 200) {
    return NextResponse.error();
  }

  try {
    const chat = await new OpenAIService()
      .system(
        '당신은 전문적인 심리학자입니다.' +
          question.me +
          '라는 질문에, 아래와 같이 답했습니다. MBTI 를 분석해주세요.'
      )
      .user(userResponse)
      .chat();

    const result = chat.choices[0].message.content;
    return NextResponse.json(result);
  } catch (e) {
    console.error(e);
    return NextResponse.error();
  }
}
