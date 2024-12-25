import { MyMessage } from "@/components/Chat/MyMessage";
import { PartnerMessage } from "@/components/Chat/PartnerMessage";
import { forwardRef, useImperativeHandle, useRef } from "react";

interface Props {
  messages: { role: string; content: string[] }[];
}

export const Chat = forwardRef<{ scrollToBottom: () => void }, Props>(
  ({ messages }: Props, ref) => {
    const bottomRef = useRef<HTMLSpanElement>(null);

    useImperativeHandle(
      ref,
      () => ({
        scrollToBottom: () => {
          bottomRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "end",
          });
        },
      }),
      []
    );

    return (
      <div className="flex-1 overflow-auto py-12 px-4 pb-[20vh]">
        <ol className="font-ownglyph flex flex-col gap-4">
          {messages.map(({ role, content }, index) =>
            role === "user" ? (
              <MyMessage key={index} content={content} />
            ) : (
              <PartnerMessage key={index} content={content} />
            )
          )}
        </ol>
        <span ref={bottomRef} />
      </div>
    );
  }
);

Chat.displayName = "Chat";
