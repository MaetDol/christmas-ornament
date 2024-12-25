import { MBTIImages } from "@/shared/constants/mbtis/images";
import { MBTI } from "@/shared/types/mbti";

export const ENFP = {
  title: `번쩍번쩍 빛나는 
화려함과 매력`,
  image: MBTIImages.ENFP,
  description: {
    title: "에너지 뿜뿜! 별 장식은요..",
    content: [
      "새로운 사람들과 스스럼 없이 잘 어울리고, 반짝반짝 긍정에너지를 뿜어내요.",
      "밤하늘을 떠다니는 별똥별 처럼, 틀에 갇히는걸 싫어할 수 있어요. 대신 기발한 아이디어로 주변을 놀라게해요.",
      "빛나는 별 처럼 새로운 시도를 두려워하지 않는 대담함과 도전정신을 갖고있어요.",
      "공감도 잘해주고, 섬세한 감수성도 갖고 있어요.",
      "보이는 별 그대로, 진정성, 솔직함, 꾸밈없음, 개방된 친구에요.",
    ],
  },
  friends: [
    {
      mbti: "INFJ",
      image: MBTIImages.INFJ,
      description: `산타할아버지에게 달려드는 아이같은 사이에요!
별 장식의 밝고 활발한 에너지로 산타에게 끊임없이 말을 걸고 기발한 아이디어를 쏟아낼거에요.`,
    },
    {
      mbti: "INTJ",
      image: MBTIImages.INTJ,
      description: `산타 양말만의 공간에 불쑥 들어와 양말이 불편해 할 수 있지만, 
별 장식만의 긍정긍정 에너지에 마음을 열지도 몰라요.`,
    },
    {
      mbti: "INFP",
      image: MBTIImages.INFP,
      description: `별 장식이 선물상자의 포장을 칭찬하고, 함께 무엇이 들었을지 상상하며 즐거워할거에요.
별 장식은 여린 선물상자를 토닥여주며 격려해줄거에요.`,
    },
    {
      mbti: "ENTP",
      image: MBTIImages.ENTP,
      description: `번쩍번쩍한데 종소리까지!!
징글벨의 번뜩이는 재치와 유머에 웃음을 터뜨릴거에요.
주변 사람들은 정신없을 수 있겠네요..`,
    },
  ],
} satisfies MBTI;
