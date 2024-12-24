"use client";

import { Chat } from "@/components/Chat";
import { useConversation } from "@/components/Chat/hooks/useConversation";
import { ChatInput } from "@/components/ChatInput";
import BackgroundImage from "@/static/images/bg.jpg";
import { mbtiScoreService } from "@/shared/services/mbtiScoreService";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function Page() {
  const { conversation, submit, disableInput, isEnd, res } = useConversation();

  const chatRef = useRef<{ scrollToBottom: () => void }>(null);
  useEffect(() => {
    if (conversation.length < 2) return;
    chatRef.current?.scrollToBottom();
  }, [conversation]);

  console.log(mbtiScoreService.calculate(res));

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

        <div
          className={`
            absolute left-1/2 translate-x-[-50%] ease-out
            delay-1000 transition-[top] ${isEnd ? "top-[82vh]" : "top-[105vh]"}
            `}
        >
          {isEnd && (
            <Link
              className="font-ownglyph text-[24px] text-center py-3 px-5 text-white
            bg-rose-800 rounded-full shadow-drop-1
            "
              href={{
                pathname: "/result",
                query: { mbti: mbtiScoreService.calculate(res) },
              }}
            >
              카드 보러가기 !
            </Link>
          )}
        </div>
      </section>
    </main>
  );
}
