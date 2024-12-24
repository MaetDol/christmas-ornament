import Image from "next/image";
import INFP from "@/static/images/infp_giftbox.png";
import tree from "@/static/images/tree.png";

export default function Page() {
  return (
    <main className="h-full bg-slate-50 px-6 pt-6 overflow-auto">
      <h1 className="font-ownglyph text-[18px] text-slate-500 mb-[88px]">
        마치 당신은..
        <span className="whitespace-pre-line mt-2 block text-center text-[30px] text-slate-800 leading-none">
          {`따뜻한 마음이
          한가득 담긴 선물상자!`}
        </span>
      </h1>

      <section
        className="shadow-drop-1 w-full min-h-[50vh] rounded-t-[16px] bg-white flex flex-col
      font-ownglyph text-slate-800 text-[30px] 
      "
      >
        <Image
          src={INFP}
          width={160}
          height={160}
          alt="INFP"
          className="aspect-square w-[160px] h-[160px] mx-auto mt-[-64px] mb-6 shadow-on-image-1"
        />

        <h2 className="mb-2 px-6">이 작은 선물상자는요..</h2>
        <ul className="text-[18px] text-slate-500 leading-none flex flex-col gap-1 mb-12 px-6">
          <li className="flex gap-2 ">
            <span className="inline-block w-[6px] h-[6px] bg-slate-500 rounded-full shrink-0 mt-2" />
            상상력으로 가득한 선물상자를 열어보는 상대가 감동했으면 하는 마음이
            한가득!
          </li>
          <li>
            매년 있는 크리스마스지만, 대충하는 선물은 노노! 본인만의 의미를
            담아요.
          </li>
        </ul>

        <h2 className="whitespace-pre-line leading-none px-6">
          {`이런 저와 어울리는
          친구들은요..`}
        </h2>
        <div className="relative">
          <Image
            src={tree}
            width={0}
            height={592}
            alt="tree"
            className="aspect-square h-[592px] w-full object-cover object-bottom opacity-50"
          />
          <ul
            className="absolute top-0 left-0 w-full h-full flex flex-col items-center pt-12
          font-ownglyph text-[18px] text-slate-800 leading-none px-4 whitespace-pre-line gap-2
          "
          >
            <li className="flex items-center">
              <Image
                src={INFP}
                width={120}
                height={120}
                alt="INFP"
                className="aspect-square w-[120px] h-[120px] shadow-on-image-1"
              />
              {`‘네가 옳단다..!’ 
              나 부둥부둥 전문가! 
              적극적인 지지자.`}
            </li>
            <li className="flex items-center text-right">
              ‘네가 옳단다..!’ 나 부둥부둥 전문가! 적극적인 지지자.
              <Image
                src={INFP}
                width={120}
                height={120}
                alt="INFP"
                className="aspect-square w-[120px] h-[120px] shadow-on-image-1"
              />
            </li>

            <li className="flex items-center">
              <Image
                src={INFP}
                width={120}
                height={120}
                alt="INFP"
                className="aspect-square w-[120px] h-[120px]"
              />
              <span>‘네가 옳단다..!’ 나 부둥부둥 전문가! 적극적인 지지자.</span>
            </li>

            <li className="flex items-center text-right">
              <span>‘네가 옳단다..!’ 나 부둥부둥 전문가! 적극적인 지지자.</span>
              <Image
                src={INFP}
                width={120}
                height={120}
                alt="INFP"
                className="aspect-square w-[120px] h-[120px]"
              />
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
