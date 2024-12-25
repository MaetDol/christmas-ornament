import { MBTIImages } from "@/shared/constants/mbtis/images";
import { MBTI } from "@/shared/types/mbti";

export const ESFJ = {
  title: `따뜻하고 헌신적인 마음`,
  image: MBTIImages.ESFJ,
  description: {
    title: "이 온화한 미소의 천사장식은요..",
    content: [
      "따스한 눈빛으로 트리를 축복하며 평화롭고 행복한 분위기를 만들어줄거에요.",
      "헌신적인 사랑으로 주변 사람들을 돌봐주며 긍정적인 에너지를 불어넣는 리더의 모습!",
      "뛰어난 공감 능력으로 사람들을 토닥여주고, 긍정적인 분위기를 퍼뜨려요.",
      "다른 장식들을 세심하게 챙기고 보살펴줘요.",
      "작은 선물에도 감동하고, 진심으로 고마워해줘요. 물질적인 것 보다 관계를 더 소중히 여겨요.",
    ],
  },
  friends: [
    {
      mbti: "ENFJ",
      image: MBTIImages.ENFJ,
      description: `작은 선물에도 감동하고, 진심으로 고마워해줘요. 물질적인 것 보다 관계를 더 소중히 여겨요.`,
    },
    {
      mbti: "ISTJ",
      image: MBTIImages.ISTJ,
      description: `묵묵하고 신뢰감을 주는 구 오너먼트! 진중함과 책임감 있는 모습에서 안정감을 느끼실거에요.`,
    },
    {
      mbti: "ESTJ",
      image: MBTIImages.ESTJ,
      description: `체계적이고 분명한 리본 장식!
추진력과 리더십에 감탄하실걸요?
함께 일할때면 더 없이 든든할거에요.`,
    },
    {
      mbti: "ESFP",
      image: MBTIImages.ESFP,
      description: `환한 꼬마전구처럼, 반짝이는 즐거움과 활력을!
가끔 즉흥적이고 예측불허지만, 축제 분위기처럼 흥겹고 들뜬 기분을 만끽할 수 있는 만남이 될거에요.`,
    },
  ],
} satisfies MBTI;
