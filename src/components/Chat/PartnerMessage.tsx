import PROFILE from "@/static/images/profile.png";
import Image from "next/image";

interface Props {
  content: string[];
}

export function PartnerMessage({ content }: Props) {
  return (
    <li className="flex gap-2 break-words">
      <Image
        className="rounded-full shadow-drop-1 shrink-0 w-12 h-12"
        src={PROFILE}
        width={48}
        height={48}
        alt="profile"
      />
      <ol className="text-[16px] text-slate-800 mt-1 flex flex-col gap-2 items-start">
        {content.map((message, index) => (
          <li
            key={index}
            className="rounded bg-slate-50 py-2 px-3 shadow-drop-1 
            first:rounded-t-lg last:rounded-b-lg whitespace-pre-line
            "
          >
            {message}
          </li>
        ))}
      </ol>
    </li>
  );
}
