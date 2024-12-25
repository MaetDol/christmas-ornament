import { MBTIImages } from "@/shared/constants/mbtis/images";
import { MBTI } from "@/shared/types/mbti";

export const ESTP = {
  title: `인생은 실전! 일단 부딪혀보는
경험파, 모험가!`,
  image: MBTIImages.ESTP,
  description: {
    title: "속도를 즐기는 이 썰매는요..",
    content: [
      "어떤 상황에서도 빠르게 적응하고, 자신의 존재감을 확실하게 드러내는 이 능력!",
      "갑작스런 상황에서도 당황하지않고 능숙하게 대처해요. 특유의 유머와 재치란..!",
      "부딪혀도 끄떡없는 썰매처럼, 현실적인 것에 좀 더 집중해요. 문제에 직면했을때도 회피하거나 망설이지 않고 현실적인 해결책을 찾아 즉시 실행!",
      "내 길은 내가 만든다! 틀에갇혀있기보다 자유롭고 다재다능해요.",
      "노는 데에 천부적인 재능, 주위에 사람이 바글바글! 천부적인 리더에요.",
    ],
  },
  friends: [
    {
      mbti: "ESFP",
      image: MBTIImages.ESFP,
      description: `빠르게 달리는 썰매 앞에서 춤추는 꼬마전구! 꼬마전구의 긍정 에너지와 장난에 같이 흥겨워하면서도 능숙하게 균형을 유지하는 썰매!`,
    },
    {
      mbti: "ENTP",
      image: MBTIImages.ENTP,
      description: `예측불가능한 징글벨의 엉뚱한 제안! 스릴과 재미를 더해주지만 덕분에 위험한 상황이 연출되기도 해요. 
하지만 썰매의 순발력과 징글벨의 재치로 위기모면!`,
    },
    {
      mbti: "ESTJ",
      image: MBTIImages.ESTJ,
      description: `“징글벨씨! 썰매 밖으로 몸 내밀지 마세요! 썰매! 속도 줄여주세요! 위험해요!”
썰매의 안전을 책임지는 네비게이션입니다~`,
    },
    {
      mbti: "ENFJ",
      image: MBTIImages.ENFJ,
      description: `리스는 썰매의 활기찬 에너지에 자극받고, 썰매의 고민을 진중하게 듣고 따뜻한 조언을 해줘요.
썰매 또한 리스에게 현실적인 조언을 건네줘요.`,
    },
  ],
} satisfies MBTI;
