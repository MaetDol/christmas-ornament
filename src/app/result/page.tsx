import Image from "next/image";
import tree from "@/static/images/tree.png";
import { MBTIS } from "@/shared/constants/mbtis";
import { Metadata } from "next";
import Link from "next/link";

interface Props {
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
}

export default async function Page({ searchParams }: Props) {
  const param = await searchParams;
  const mbtiRaw = getSingleSearchParam(param["mbti"]).toUpperCase();
  if (!mbtiRaw) return null;
  if (!isValidMBTI(mbtiRaw)) return null;

  const mbti = MBTIS[mbtiRaw];

  return (
    <main className="h-full bg-slate-50 px-6 pt-6 overflow-auto">
      <h1 className="font-ownglyph text-[18px] text-slate-500 mb-[88px]">
        마치 당신은..
        <span className="whitespace-pre-line mt-2 block text-center text-[30px] text-slate-800 leading-none">
          {mbti.title}
        </span>
      </h1>

      <section
        className="shadow-drop-1 w-full min-h-[50vh] rounded-t-[16px] bg-white flex flex-col
      font-ownglyph text-slate-800 text-[30px] 
      "
      >
        <Image
          src={mbti.image}
          width={160}
          height={160}
          alt={mbtiRaw}
          className="aspect-square w-[160px] h-[160px] mx-auto mt-[-64px] mb-6 shadow-on-image-1"
        />

        <h2 className="mb-2 px-6 leading-none">{mbti.description.title}</h2>
        <ul className="text-[18px] text-slate-500 leading-none flex flex-col gap-3 mb-12 px-6">
          {mbti.description.content.map((info, index) => (
            <li className="flex gap-2" key={index}>
              <span className="inline-block w-[6px] h-[6px] bg-slate-500 rounded-full shrink-0 mt-2" />
              {info}
            </li>
          ))}
        </ul>

        <h2 className="whitespace-pre-line leading-none px-6">
          {`이런 저와 어울리는
          친구들은요..`}
        </h2>
        <div className="relative border-b-[4px] border-slate-100">
          <Image
            src={tree}
            width={0}
            height={592}
            alt="tree bg"
            className="aspect-square h-[592px] w-full object-cover object-bottom opacity-50"
          />
          <ul
            className="absolute top-0 left-0 w-full h-full flex flex-col items-center pt-12
          font-ownglyph text-[18px] text-slate-800 leading-none px-4 whitespace-pre-line gap-2 
          break-keep
          "
          >
            {mbti.friends.map((friend, index) => (
              <li
                className={`flex items-center ${
                  index % 2 === 0 ? "" : "text-right"
                }`}
                key={index}
              >
                {index % 2 === 0 && (
                  <>
                    <Image
                      src={friend.image}
                      width={120}
                      height={120}
                      alt={friend.mbti}
                      className="aspect-square w-[120px] h-[120px] shadow-on-image-1"
                    />
                    {friend.description}
                  </>
                )}

                {index % 2 !== 0 && (
                  <>
                    {friend.description}
                    <Image
                      src={friend.image}
                      width={120}
                      height={120}
                      alt={friend.mbti}
                      className="aspect-square w-[120px] h-[120px] shadow-on-image-1"
                    />
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>

        <footer className="text-center py-12 bg-slate-50">
          <Link
            className="p-3 bg-rose-800 text-white rounded-lg shadow-drop-1"
            href="/"
          >
            오너먼트 확인하러 가기!
          </Link>
        </footer>
      </section>
    </main>
  );
}

function isValidMBTI(mbti: string): mbti is keyof typeof MBTIS {
  return mbti in MBTIS;
}

function getSingleSearchParam(params: string[] | string | undefined): string {
  if (Array.isArray(params)) return params[0];
  if (params) return params;
  return "";
}

export const generateMetadata = async ({
  searchParams,
}: Props): Promise<Metadata> => {
  const params = await searchParams;
  const mbti = getSingleSearchParam(params["mbti"]).toUpperCase();
  if (!isValidMBTI(mbti)) {
    return {};
  }

  return {
    openGraph: {
      type: "website",
      url: "https://christmas.mtdl.kr/result/?mbti=" + mbti,
      title:
        MBTIS[mbti].title.replace(/\n/g, " ") +
        " " +
        MBTIS[mbti].description.title,
      description: "이 오너먼트는 어떤 특징이 있을까요?",
      images: [
        {
          url: MBTIS[mbti].image.src,
          width: 320,
          height: 320,
        },
      ],
    },
  };
};
