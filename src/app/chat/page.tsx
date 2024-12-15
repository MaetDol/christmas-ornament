'use client';

import { Chat } from '@/components/Chat';
import { ChatInput } from '@/components/ChatInput';
import BackgroundImage from '@/static/images/bg.jpg';
import Image from 'next/image';

export default function Page() {
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
        <Chat
          messages={[
            {
              role: 'user',
              content: ['안녕하세요. 저는 봇입니다.', '해윙해윙'],
            },
            { role: 'partner', content: ['안녕하세요. 반가워요.', '해윙해윙'] },
            { role: 'user', content: ['오늘 날씨가 어떤가요?'] },
            { role: 'partner', content: ['오늘 날씨는 맑아요.'] },
            { role: 'user', content: ['오늘은 뭐할까요?'] },
            { role: 'partner', content: ['오늘은 쉬는 날이에요.'] },
          ]}
        />

        {/* 입력 영역 */}
        <ChatInput />
      </section>
    </main>
  );
}
