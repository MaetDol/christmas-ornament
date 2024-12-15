'use client';

import { Chat } from '@/components/Chat';
import { ChatInput } from '@/components/ChatInput';
import { chatApi } from '@/shared/api/chatApi';
import { QUESTIONS } from '@/shared/constants/questions';
import { ChatResponse } from '@/shared/types/chatApi';
import BackgroundImage from '@/static/images/bg.jpg';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type Conversation = { role: string; content: string[] };

export default function Page() {
  const [questionIdx, setQuestionIdx] = useState(0);
  const [res, setRes] = useState<ChatResponse[]>([]);

  const [conversation, setConversation] = useState<Conversation[]>([]);

  const addConversation = (chat: string, isUser: boolean) => {
    const newChat = { role: isUser ? 'user' : 'partner', content: [chat] };

    setConversation((prev) => {
      const last = prev.at(-1);
      if (last?.role === newChat.role) {
        newChat.content = [...last.content, chat];
        return [...prev.slice(0, -1), newChat];
      }

      return [...prev, newChat];
    });
  };

  const nextChat = () => {
    if (questionIdx >= QUESTIONS.length - 1) return;
    setQuestionIdx((prev) => prev + 1);
  };

  const response = (res: string) => {
    addConversation(res, true);

    const question = QUESTIONS[questionIdx];
    if (question.response) {
      addConversation(question.response, false);
    }

    nextChat();
  };

  const submit = async (input: string) => {
    const question = QUESTIONS[questionIdx];
    if (!question.id) return;

    response(input);

    chatApi.chat(question.id, input).then((res) => {
      setRes((prev) => [...prev, res]);
    });
  };

  useEffect(() => {
    const question = QUESTIONS[questionIdx];

    const id = window.setTimeout(() => {
      addConversation(question.me, false);

      if (question.isQuestion) return;
      nextChat();
    }, 600 + question.me.length * 50);

    return () => {
      window.clearTimeout(id);
    };
  }, [questionIdx]);

  return (
    <main className=" w-screen h-full">
      <Image
        className="w-screen h-full object-cover object-center opacity-60 absolute"
        width={0}
        height={0}
        src={BackgroundImage}
        alt="Background image"
      />

      <section className="flex flex-col h-full relative ">
        {/* 채팅영역 */}
        <Chat messages={conversation} />

        {/* 입력 영역 */}
        <ChatInput onSubmit={submit} />
      </section>
    </main>
  );
}
