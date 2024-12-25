import { MBTIImages } from "@/shared/constants/mbtis/images";
import { MBTI } from "@/shared/types/mbti";

export const ISFP = {
  title: `빨간 사탕에 아름다운
  흰 선을 긋 듯, 캔디 케인`,
  image: MBTIImages.ISFP,
  description: {
    title: "이 예쁜 캔디 케인은요..",
    content: [
      `보기에 이뻐요! 본인만의 스타일을 뽐내죠.`,
      `크리스마스에 사탕을 주고 받듯, 선물 주고받길 좋아해요.`,
      `진한 달콤함 처럼, 친구들과 진솔한 대화 나누길 좋아해요.`,
      `사탕은 녹아요. 감동하면 눈물 팡팡!`,
      `트리에 잘 어울리듯, 자연 속 산책을 즐겨요.`,
    ],
  },
  friends: [
    {
      mbti: "ESFP",
      image: MBTIImages.ESFP,
      description: `사탕의 달달함에 맞춰 반짝이듯, 서로의 즉흥적인 흥에 잘 맞춰줘요.`,
    },
    {
      mbti: "ENFP",
      image: MBTIImages.ENFP,
      description: `별의 반짝이는 호기심을 캔디케인이 놓칠리 없죠? 서로에게 영감을 주는 사이!`,
    },
    {
      mbti: "ISTJ",
      image: MBTIImages.ISTJ,
      description: `진저브레드가 깔끔하게 정돈해 놓으면,
거기에 캔디케인의 미적 포인트 한방울!`,
    },
    {
      mbti: "INFP",
      image: MBTIImages.INFP,
      description: `선물상자에 어떤걸 넣을까? 라고 묻는다면, 달콤한 캔디케인을!`,
    },
  ],
} satisfies MBTI;
