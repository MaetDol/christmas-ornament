import { MBTIImages } from "@/shared/constants/mbtis/images";
import { MBTI } from "@/shared/types/mbti";

export const INTJ = {
  title: `특별한 비밀을
  품고 있는 양말!`,
  image: MBTIImages.INTJ,
  description: {
    title: "실용적이고 효율적인 산타 양말은요..",
    content: [
      `장식 보단, 실용을 추구하는 양말이에요. 아마 최고급 소재로 만들어지지 않았을까요?`,
      `그리고, 겉모습보단 선물 담는게 주 목적이니 효율적으로 담을 수 있을거에요.`,
      `그러니.. 선물이 삐져나오거나 너무 헐렁하지 않을거에요. 완벽하죠?`,
      `이 양말은, 눈에 띄지 않는 곳에 걸려있을거에요. 주목받는걸 좋아하진 않은가봐요.`,
      `자신의 영역을 중요시해요. 몰래 열어보지 못하게 지문인식이라던지, 자물쇠같은게 걸려있지 않을까요?`,
    ],
  },
  friends: [
    {
      mbti: "ENFP",
      image: MBTIImages.ENFP,
      description: `반짝반짝 긍정적으로 빛나는 별 장식이, 딱딱한 양말의 분위기를 풀어줄 수 있을거에요.
그치만.. 조금 눈부실지두..`,
    },
    {
      mbti: "ENTJ",
      image: MBTIImages.ENTJ,
      description: `목표만 보고 달리는 루돌프 처럼,
양말도 마찬가지! 선의의 경쟁을 펼치는 사이!
하지만 최고의 결과물을 위해 협력하기도 해요.`,
    },
    {
      mbti: "INFJ",
      image: MBTIImages.INFJ,
      description: `서로를 깊이 이해하고 존중하는 사이! 따뜻한 산타가 주는 선물에 감동한건 아니겠죠?`,
    },
    {
      mbti: "INTJ",
      image: MBTIImages.INTJ,
      description: `... 알지? 찡긋.
양말끼리 모아서 걸어두는 이유가 있다니까요.`,
    },
  ],
} satisfies MBTI;
