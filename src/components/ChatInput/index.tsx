import AirplanSVG from '@/static/svg/solid-paper-airplane.svg';
import Image from 'next/image';

export function ChatInput() {
  return (
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
  );
}
