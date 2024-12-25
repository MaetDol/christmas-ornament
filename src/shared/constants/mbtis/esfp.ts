import { MBTIImages } from "@/shared/constants/mbtis/images";
import { MBTI } from "@/shared/types/mbti";

export const ESFP = {
  title: `어떤 색으로 빛날까?
예측 불허!`,
  image: MBTIImages.ESFP,
  description: {
    title: "이 반짝이는 꼬마전구는요..",
    content: [
      "트리에서 가장 눈에 띄는 친구일거에요. 알록달록 여러 색깔로 반짝이며 밝은 빛으로 주변을 밝게 비춰요.",
      "밝은 꼬마전구 처럼, 긍정적인 에너지와 활기 넘치는 분위기로 줍변 사람들을 즐겁게 만들어요.",
      "다른 장식들과 스스럼없이 어울리며 긍정적인 소통으로 주변과 조화를 이뤄요.",
      "반짝이는 이 순간을 즐기고 긍정적인 에너지를 듬뿍 나눠줘요.",
      "트리가 흔들리거나 다른 장식과 부딪히는 등 예측불허의 상황 속에서도 뛰어난 적응력과 유연성을 보여줘요.",
    ],
  },
  friends: [
    {
      mbti: "ISFP",
      image: MBTIImages.ISFP,
      description: `꼬마전구 특유의 밝고 활발한 에너지가 넘칠때 차분하게 중재해줘요.`,
    },
    {
      mbti: "ESTP",
      image: MBTIImages.ESTP,
      description: `서로 넘치는 에너지에 이끌려 신나는 모험을!
반짝이는 꼬마전구를 트리가 따라다니며, 서로 경쟁하듯 열정과 끼를 부릴거에요.`,
    },
    {
      mbti: "ISFJ",
      image: MBTIImages.ISFJ,
      description: `꼬마전구가 엉뚱한 행동을 할 때면, 진저브레드가 숙련된 보모처럼 차분하게 상황을 정리해줄거에요.
묵묵히 곁을 지키며 꼬마전구에게 따뜻한 위로를 건내줄걸요?`,
    },
    {
      mbti: "ENFP",
      image: MBTIImages.ENFP,
      description: `번쩍번쩍한 별 장식에 반짝이는 꼬마전구까지..! 예측불허! 서로의 창의력을 자극하고, 환상을 현실로 만들어내는 엄청난 시너지!`,
    },
  ],
} satisfies MBTI;
