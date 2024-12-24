import { OpenAIService } from "@/shared/services/openAiService";
import { getQuestion } from "@/shared/utils/getQuestion";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { id, userResponse } = await request.json();

  const question = getQuestion(id);
  if (!question) {
    return NextResponse.error();
  }
  if (typeof userResponse !== "string") {
    return NextResponse.error();
  }
  if (userResponse.length > 200) {
    return NextResponse.error();
  }

  try {
    const chat = await new OpenAIService()
      .system(
        "당신은 전문적인 심리학자입니다.\n" +
          +`'${question.me}'` +
          "\n라는 질문에, 다음과 같이 대답했을때. MBTI 를 분석하세요.\n" +
          "성의없거나 애매한 대답일 경우, 50에 가까운 percent 와 낮은 confidence 를 부여하세요." +
          "깐깐하고 논리적인 이유로 값을 부여해야합니다. 신중하세요."
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
