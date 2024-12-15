import { MyMessage } from '@/components/Chat/MyMessage';
import { PartnerMessage } from '@/components/Chat/PartnerMessage';

interface Props {
  messages: { role: string; content: string[] }[];
}

export function Chat({ messages }: Props) {
  return (
    <div className="flex-1 overflow-auto py-12 px-4">
      <ol className="font-ownglyph flex flex-col gap-4">
        {messages.map(({ role, content }, index) =>
          role === 'user' ? (
            <MyMessage key={index} content={content} />
          ) : (
            <PartnerMessage key={index} content={content} />
          )
        )}
      </ol>
    </div>
  );
}
