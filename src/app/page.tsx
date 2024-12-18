import { PartnerMessage } from "@/components/Chat/PartnerMessage";
import AirplaneSVG from "@/static/svg/solid-paper-airplane-slate-400.svg";
import BG from "@/static/images/main-bg.png";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="font-ownglyph relative h-full ">
      <div className="flex flex-col items-center">
        <h1
          className="whitespace-pre-line text-center 
      text-[30px] text-slate-800 pt-16 pb-4"
        >{`나와 닮은 오너먼트는
    무엇일까?`}</h1>
        <div className="flex flex-col gap-1">
          <PartnerMessage content={["오랜만이야! 잘 지내구 있어?"]} />
          <Link
            href={"/chat"}
            className="ml-auto text-slate-500 flex gap-2 items-center"
          >
            답장하러 가기
            <Image
              src={AirplaneSVG}
              width={32}
              height={32}
              alt="답장하러 가기"
            />
          </Link>
        </div>
      </div>

      <Image
        className="absolute w-full bottom-0"
        src={BG}
        width={480}
        height={514}
        alt="bg"
      />
    </main>
  );
}
