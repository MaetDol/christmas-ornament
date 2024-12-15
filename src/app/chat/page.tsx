'use client';

import BackgroundImage from '@/static/images/bg.jpg';
import AirplanSVG from '@/static/svg/solid-paper-airplane.svg';
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
        <div className="flex-1 overflow-auto py-12 px-4">
          <ol className="font-ownglyph">
            <li className="flex gap-2 ">
              <div className="w-12 h-12 rounded-full shadow-drop-1 bg-slate-300"></div>
              <ol className="font-[18px] mt-1 flex flex-col gap-2 items-start">
                <li className="rounded bg-slate-50 py-2 px-3 shadow-drop-1 first:rounded-t-lg">
                  안녕! 잘 지내고 있니?
                </li>
                <li className="rounded bg-slate-50 py-2 px-3 shadow-drop-1 last:rounded-b-lg">
                  블라블라~
                </li>
              </ol>
            </li>

            <li className="flex gap-2 mt-4 justify-end">
              <ol>
                <li className="rounded-lg bg-slate-50 py-2 px-3 shadow-drop-1 text-white bg-lime-800">
                  블라블라~
                </li>
              </ol>
            </li>
          </ol>
        </div>

        {/* 입력 영역 */}
        <div className="w-full mt-auto p-2 bg-rose-800 flex gap-2">
          <div
            contentEditable
            className="py-2 px-4 rounded-full bg-slate-50 flex-1 h-10
          shadow-[inset_2px_-2px_4px_rgba(0,0,0,0.1)] 
          font-ownglyph h-fit text-slate-800
          "
          ></div>
          <button
            className="bg-slate-50 shrink-0 w-10 h-10 rounded-full
          shadow-[inset_2px_-2px_4px_rgba(0,0,0,0.1)]
          flex items-center justify-center font-[18px]
        "
          >
            <Image src={AirplanSVG} width={32} height={32} alt="submit" />
          </button>
        </div>
      </section>
    </main>
  );
}
