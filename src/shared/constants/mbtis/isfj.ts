import { MBTIImages } from "@/shared/constants/mbtis/images";
import { MBTI } from "@/shared/types/mbti";

export const ISFJ = {
  title: `따뜻한 마음을 담은
  달콤한 위로`,
  image: MBTIImages.ISFJ,
  description: {
    title: "이 따뜻한 진저브레드는요..",
    content: [
      "하고있는 따뜻한 목도리처럼, 배려심이 많아요. 간식을 나눠준다던지요!",
      "‘쿠키 만드는 법’ 같은 규칙을 중요하게 여겨요. 계량을 잘못하면 이쁘지않거든요.",
      "은은하고 향긋한 생강 향으로 항상 곁에 머물고 싶은 편안함.",
      "빛나기보단 다른 쿠키들과 조화롭게 어울리는걸 더 좋아해요.",
      "겉으로는 차분하고 조용해요.",
    ],
  },
  friends: [
    {
      mbti: "ESFJ",
      image: MBTIImages.ESFJ,
      description: `천사장식은
      진저브레드의 이런 섬세한 마음을
       잘 이해하고, 칭찬해줄거에요.`,
    },
    {
      mbti: "ISFP",
      image: MBTIImages.ISFP,
      description: `딱딱한 진저브레드에게
       새로운 영감을 불어넣어주는 캔디케인!
캔디케인의 즉흥적인 느낌과 
진저브레드의 안정적인 느낌이
 어우러질거에요.`,
    },
    {
      mbti: "ISTJ",
      image: MBTIImages.ISTJ,
      description: `구 오너먼트의 책임감과
진저브레드의 성실함 시너지!
묵묵히 서로를 지지해주는
든든한 관계.`,
    },
    {
      mbti: "INFP",
      image: MBTIImages.INFP,
      description: `구 오너먼트의 책임감과
진저브레드의 성실함 시너지!
묵묵히 서로를 지지해주는
든든한 관계.`,
    },
  ],
} satisfies MBTI;
