import { MBTIImages } from "@/shared/constants/mbtis/images";
import { MBTI } from "@/shared/types/mbti";

export const ESTJ = {
  title: `풀리지 않는 단단한 매듭!`,
  image: MBTIImages.ESTJ,
  description: {
    title: "이 깔끔한 리본장식은요..",
    content: [
      "새빨간 색깔은 마치 확고한 신념과 책임감! 주어진 일은 반드시 완수하고, 무슨일이 있어도 약속은 지켜요.",
      "반듯하게 접힌 이 모습처럼, 효율적으로 그리고 체계적으로 일을 처리해요. 깔끔하죠?",
      "단단한 매듭처럼, 강력한 리더십과 통솔력으로 오너먼트들을 이끌어요.",
      "현실적인 것에 관심이 많아요. 갓생러!",
      "이렇게해서 이뤄낸 일에 큰 보람을 느껴요.",
    ],
  },
  friends: [
    {
      mbti: "ISTP",
      image: MBTIImages.ISTP,
      description: `마치 전문가가 전문가를 알아보는 것 처럼! 리본의 계획과 눈사람의 문제해결능력이 만나면 어떤 일이라도 뚝딱뚝딱!`,
    },
    {
      mbti: "ESFJ",
      image: MBTIImages.ESFJ,
      description: `리본과 함께 주변 사람들을 챙기며 보람을 느껴요. 서로에게 안정감과 긍정적인 에너지를!`,
    },
    {
      mbti: "ESFP",
      image: MBTIImages.ESFP,
      description: `리본에게 긍정적인 자극을 주고, 삶에 예상지 못한 즐거움을 주는 꼬마전구! 억눌렀던 감정을 표현할 수 있게 용기를 줄거에요.`,
    },
    {
      mbti: "ISTJ",
      image: MBTIImages.ISTJ,
      description: `마치 오랜 시간을 맞춰온 시계처럼, 서로의 가치관과 생활 방식을 너무나 잘 이해하기에 편안함을 느낄 수 있을거에요.`,
    },
  ],
} satisfies MBTI;
