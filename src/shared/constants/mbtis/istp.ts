import { MBTIImages } from "@/shared/constants/mbtis/images";
import { MBTI } from "@/shared/types/mbti";

export const ISTP = {
  title: `투박하지만 튼튼한
눈 사 람`,
  image: MBTIImages.ISTP,
  description: {
    title: "묵묵하지만 따뜻한 눈사람은요..",
    content: [
      "손수 만든 눈사람일거에요! 스스로 필요한 부품을 찾고 꾸며서, 자신만의 방식으로 완성하는걸 좋아해요.",
      "겉으로 화려하진 않지만, 그 자리에 안정적으로 머물러 있을거에요.",
      "주변 평가나 시선에 흔들리지 않아요. 만들어 둔 자리에서, 본인의 역할을 다할 뿐..",
      "차가워보이지만 은근히 주변을 챙겨줘요.",
      "시간이 지나 눈과 바람에 단련해 튼튼해진 눈사람은, 예상치 못한 상황에서 재치있는 문제 해결을 보여줄지도 몰라요.",
      "최대한 적은 노력으로 최대의 효과를 내는 것을 좋아해요.",
    ],
  },
  friends: [
    {
      mbti: "ESTP",
      image: MBTIImages.ESTP,
      description: `눈사람 처럼 현실적인 트리. 그러면서도, 둘 다 활동적이에요.
같이 스키라도 타는건 어때요?`,
    },
    {
      mbti: "ISFP",
      image: MBTIImages.ISFP,
      description: `묵묵한 눈사람 옆에서, 달달한 위로를 건네주는 캔디케인!
함께 있는 것 만으로 편안함과 안정감을 느낄 수 있을거에요.`,
    },
    {
      mbti: "ISTJ",
      image: MBTIImages.ISTJ,
      description: `눈사람에게 반짝이는 조언을 해주는 구 오너먼트. 눈사람에게 현실적인 조언을 해주는 스승같은 느낌 아닐까요?`,
    },
    {
      mbti: "INTJ",
      image: MBTIImages.INTJ,
      description: `둘 다 분석적이고, 논리적이지만,
양말이 우리가 만약 통속의 뇌라면?! 같은 질문을 던지면,
눈사람은 눈앞의 이 눈부터 치우는건 어떨까? 라는 답을 할지도 모르겠네요.`,
    },
  ],
} satisfies MBTI;
