"use client";

import { Chat } from "@/components/Chat";
import { useConversation } from "@/components/Chat/hooks/useConversation";
import { ChatInput } from "@/components/ChatInput";
import BackgroundImage from "@/static/images/bg.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function Page() {
  const { conversation, submit, disableInput, isEnd, res } = useConversation();

  const chatRef = useRef<{ scrollToBottom: () => void }>(null);
  useEffect(() => {
    chatRef.current?.scrollToBottom();
  }, [conversation]);

  const router = useRouter();
  useEffect(() => {
    if (isEnd) {
      router.push("/result", {
        search: `mbti=mbtiScoreService.calculate(res)`,
      });
    }
  }, [isEnd]);

  return (
    <main className=" w-full h-full">
      <Image
        className="w-screen h-full object-cover object-center opacity-60 absolute"
        width={0}
        height={0}
        src={BackgroundImage}
        alt="Background image"
      />

      <section className="flex flex-col h-full relative overflow-hidden">
        <Chat messages={conversation} ref={chatRef} />

        <div
          className={`ease-out transition-transform ${
            disableInput || isEnd ? "translate-y-full" : "translate-y-0"
          }`}
        >
          <ChatInput onSubmit={submit} />
        </div>
      </section>
    </main>
  );
}
