import { MBTIImages } from "@/shared/constants/mbtis/images";
import { MBTI } from "@/shared/types/mbti";

export const ENFJ = {
  title: `앞에서 모두를
따뜻하게 맞이해주는`,
  image: MBTIImages.ENFJ,
  description: {
    title: "마치 연결고리같은 리스는요..",
    content: [
      "문 앞에서 사람들을 맞이해주는 것 처럼, 누구에게나 친절하고 긍정적인 에너지를 나눠줘요.",
      "현관문에 걸려, 주변 사람들을 모으는 것 처럼 주변 사람들의 연결고리 역할을 해줄거에요.",
      "디테일하게 꾸며진 리스처럼, 완벽주의자 같은 모습을 보여줘요.",
      "풍부한 상상력과 섬세한 감수성을 가졌어요.",
      "다른 장식이 어우러질 수 있게끔 해줘요. 협동심과 배려심이 뛰어나죠.",
    ],
  },
  friends: [
    {
      mbti: "ISFP",
      image: MBTIImages.ISFP,
      description: `리스는 캔디케인의 섬세하고 따뜻한 감성을 알아보고, 곁에서 편안함과 안정감을 느낄 수 있도록 배려해줄거에요.`,
    },
    {
      mbti: "INFP",
      image: MBTIImages.INFP,
      description: `선물상자의 풍부한 상상력과 순수한 감성에 매료될걸요?`,
    },
    {
      mbti: "INFJ",
      image: MBTIImages.INFJ,
      description: `오랜 시간 서로 이해해온 동반자처럼, 서로를 지지하고 격려해줄거에요.
산타는 리스의 리더십에 감동하지않을까요?`,
    },
    {
      mbti: "ISFJ",
      image: MBTIImages.ISFJ,
      description: `진저브레드의 헌신적이고 배려심 깊은 성격에 놀랄 수 밖에 없을걸요? 이런 친구에게 마구마구 칭찬해주면, 주변에 더 열심히 행복을 나눠줄거에요.`,
    },
  ],
} satisfies MBTI;
