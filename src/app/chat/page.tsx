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
        <Chat />

        {/* 입력 영역 */}
        <ChatInput />
      </section>
    </main>
  );
}
