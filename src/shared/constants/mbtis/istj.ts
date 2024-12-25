import { MBTIImages } from "@/shared/constants/mbtis/images";
import { MBTI } from "@/shared/types/mbti";

export const ISTJ = {
  title: `트리 장식에서 
빠질 수 없는,`,
  image: MBTIImages.ISTJ,
  description: {
    title: "시간이 새겨진 구 오너먼트는요..",
    content: [
      "낡아도 변치않는 아름다움 처럼, 새 오너먼트들 사이에서 은은하게 빛나는 구 오너먼트, 왠지 신뢰가 가지않나요?",
      "그렇게 오랜 세월을 지나온 구 오너먼트에는 추억이 담겨있어요. 이걸 다 기억하다니, 기억력 정말 좋죠?",
      "화려하지 않은 잔잔함이 은은한 포근함과 헌신을 나타내는 것 같아요!",
      "오래 버티는 내구성, 그만큼 인내심과 끈기가 좋아요!",
      "오랜 시간 변함없이 묵묵히 지키는 모습이에요.",
    ],
  },
  friends: [
    {
      mbti: "ISFJ",
      image: MBTIImages.ISFJ,
      description: `둘 다 조용하고 헌신적인 성격이라, 부담주지 않고 묵묵히 곁을 지켜줄거에요.
진저브레드가 따뜻한 차 한잔 건네면, 구 오너먼트가 추억 이야기를 하는거죠.`,
    },
    {
      mbti: "ISTP",
      image: MBTIImages.ISTP,
      description: `손재주가 뛰어난 눈사람은 구 오너먼트의 낡은 부분을 고쳐줄 수 있을거에요. 둘 다 현실적이고 실용적인걸 중요시 여겨, 구체적인 도움을 주고받을 수 있을거에요.`,
    },
    {
      mbti: "ESTJ",
      image: MBTIImages.ESTJ,
      description: `둘 다 체계적이고 계획적인걸 선호해 효율적으로 협력할 수 있을거에요. 꼼꼼한 비서같은 느낌!`,
    },
    {
      mbti: "INFJ",
      image: MBTIImages.INFJ,
      description: `구 오너먼트가 속마음을 털어놓을 수 있는 따뜻한 산타!
혹시 수많은 감정들을 억누르고 살고계시진 않나요?
산타가 따뜻한 격려와 조언을 줄 수 있을지 몰라요.`,
    },
  ],
} satisfies MBTI;
