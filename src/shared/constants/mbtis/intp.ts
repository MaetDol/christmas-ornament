import { MBTIImages } from "@/shared/constants/mbtis/images";
import { MBTI } from "@/shared/types/mbti";

export const INTP = {
  title: `독특하고 복잡한
  구조를 가진 결정체`,
  image: MBTIImages.INTP,
  description: {
    title: "이 차갑지만 아름다운 눈송이는요..",
    content: [
      "차갑듯 겉으로는 무뚝뚝하지만, 복잡한 구조처럼 톡톡 튀는 생각들로 가득 차 있어요.",
      "복잡한 모양을 가진 눈송이 처럼, 엉뚱하지만 기발한 질문들을해요",
      "차가운 눈송이처럼, 감정 표현에 서툴 수 있어요.",
      "완벽한 대칭을 유지하듯, 완벽한 논리와 이론을 추구해요.",
      "하늘에 휘날리는 눈송이들처럼, 독립적이고 자유로움을 좋아해요",
    ],
  },
  friends: [
    {
      mbti: "ENTJ",
      image: MBTIImages.ENTJ,
      description: `루돌프!
눈송이의 번뜩이는 아이디어를 실현할, 
실행력을 가지고 있는 친구!
하지만 가끔은 강압적일 수 있어요.`,
    },
    {
      mbti: "ENTP",
      image: MBTIImages.ENTP,
      description: `재치넘치고 활발한 징글 벨과 함께한다면,
새로운 에너지를 받을 수 있을거에요.
하지만 지나치면, 눈송이가 싫어할 수 있어요.`,
    },
    {
      mbti: "INTJ",
      image: MBTIImages.INTJ,
      description: `조용히 걸려있는 산타 양말처럼,
서로 혼자만의 시간을 존중해줘요.
또한 복잡한 문제를 함께 해결하며 친해지기 좋아요.`,
    },
    {
      mbti: "INFJ",
      image: MBTIImages.INFJ,
      description: `차가운 눈송이도, 산타는 꼬옥 안아줄 수 있어요.
이런 저런 고민을 털어놓는 진중한 사이가 될 수도..?`,
    },
  ],
} satisfies MBTI;
