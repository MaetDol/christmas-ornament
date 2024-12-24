import { MBTIImages } from "@/shared/constants/mbtis/images";
import { MBTI } from "@/shared/types/mbti";

export const INFP = {
  title: `따듯한 마음이
  한가득 담긴 선물상자!`,
  image: MBTIImages.INFP,
  description: {
    title: "이 작은 선물상자는요..",
    content: [
      "상상력으로 가득한 선물상자를 열어보는 상대가 감동했으면 하는 마음이 한가득!",
      "매년 있는 크리스마스지만, 대충하는 선물은 노노! 본인만의 의미를 담아요.",
      "본인의 매력을 뽐내기 보다, 다른 오너먼트들이 어우러질 수 있게 도와줘요.",
      "하지만! 내심 알아줬으면 하는 이 마음..",
      "혼자만의 충전하는 시간도 필요해요.",
    ],
  },

  friends: [
    {
      mbti: "ENFJ",
      image: MBTIImages.ENFJ,
      description: `‘네가 옳단다..!’
              나 부둥부둥 전문가!
              적극적인 지지자.`,
    },
    {
      mbti: "INFJ",
      image: MBTIImages.INFJ,
      description: `‘너의 마음을 알아’
              나만의 비밀을 간직한 친구!
              믿음직한 산타.`,
    },
    {
      mbti: "ENFP",
      image: MBTIImages.ENFP,
      description: `‘오늘은 뭐할까?’
              끊임없이 새로운 것을 찾는 친구!
              그치만 조금은 눈부실지도..`,
    },
    {
      mbti: "INTP",
      image: MBTIImages.INTP,
      description: `사람이 어떻게 이래?
              서로 신기해해요!
              만나보지 못한 새로운 타입..!`,
    },
  ],
} satisfies MBTI;
