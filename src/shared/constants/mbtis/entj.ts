import { MBTIImages } from "@/shared/constants/mbtis/images";
import { MBTI } from "@/shared/types/mbti";

export const ENTJ = {
  title: `목표로 한 곳까지
반드시 간다!`,
  image: MBTIImages.ENTJ,
  description: {
    title: "이 용맹한 루돌프 인형은요..",
    content: [
      "새빨간 코, 마치 명확한 목표와 넘치는 자신감같지 않나요?",
      "썰매를 이끌 듯 강력한 리더십과 결단력을 보여줘요.",
      "이렇게 정한 목표를, 썰매를 이끌고 세차게 달리는 추진력과 실행력! 일단 달려!",
      "체계적이고 효율적으로 행동하려 해요. 갈 곳이 멀다구!",
      "이렇게 냉철하고 이성적인 것 같지만, 같이하는 사람들을 챙기는 따뜻한 마음도 가지고 있어요.",
    ],
  },
  friends: [
    {
      mbti: "INTP",
      image: MBTIImages.INTP,
      description: `루돌프에게 끊임없는 지적 자극을! 마치 체스를 두듯 흥미진진하고 치열한 대화가 오갈거에요. 그러면서 피드백도 주고받구요!`,
    },
    {
      mbti: "ENTP",
      image: MBTIImages.ENTP,
      description: `아이디어 뱅크인 징글 벨과의 만남! 서로의 아이디어가 더 낫다! 같은 유치한 논쟁도 있겠지만, 최고의 콜라보레이션을 만들어낼거에요. 예측 불가능한 티키타카!`,
    },
    {
      mbti: "INTJ",
      image: MBTIImages.INTJ,
      description: `효율과 실용을 따지는 산타 양말과 추진력, 리더십을 가진 루돌프의 만남! 마치 최고의 비즈니스 파트너같지 않나요? 효율적으로! 착착착!`,
    },
    {
      mbti: "ESFJ",
      image: MBTIImages.ESFJ,
      description: `천사장식은 루돌프의 리더십에 존경심을, 루돌프는 따뜻함에 감동을!
서로를 배려하고 챙기는 모습은 연인같기도 한걸요?`,
    },
  ],
} satisfies MBTI;
