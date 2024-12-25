import { MBTIImages } from "@/shared/constants/mbtis/images";
import { MBTI } from "@/shared/types/mbti";

export const ENTP = {
  title: `예측불가, 엉뚱매력!
징글 벨`,
  image: MBTIImages.ENTP,
  description: {
    title: "이 반짝이는 징글 벨은요..",
    content: [
      "반짝이는 외관처럼, 반짝이는 생각들이 머릿속을 가득 채우고 있어요.",
      "흔들릴 때마다 경쾌하게 울리는 소리처럼, 짓궃은 농담을 던지거나 예상치 못한 질문을 던질때도 있지만, 그 유쾌함에 미워할 수 없을거에요.",
      "틀에 갇히는걸 싫어해요. 자신의 생각대로 행동하는걸 중요하게 여겨요.",
      "호기심 가득! 새로운 지식이나 경험에 대한 갈망이 엄청나요. 항상 새로운걸 배우려해요.",
      "맑게 울리는 종소리처럼, 자신의 생각을 명확하게 표현하는걸 좋아해요.",
    ],
  },
  friends: [
    {
      mbti: "INFJ",
      image: MBTIImages.INFJ,
      description: `맑게 울리는 종소리처럼, 자신의 생각을 명확하게 표현하는걸 좋아해요.`,
    },
    {
      mbti: "INTJ",
      image: MBTIImages.INTJ,
      description: `징글 벨의 아이디어를 체계화하고, 구체적인 계획을 세우는데 능력을 발휘할거에요.
서로의 논리에 빈틈이 없는지 질문하고 반박하며 열띤 토론을 보일수도 있겠네요.`,
    },
    {
      mbti: "INTP",
      image: MBTIImages.INTP,
      description: `이 복잡한 눈송이 처럼, 논리적이고 지적인 탐구를 즐기는 논쟁 파트너가 될 수 있어요.
밤을 새워가며 열띤 토론을 한번!`,
    },
    {
      mbti: "ENFP",
      image: MBTIImages.ENFP,
      description: `별 장식은 반짝이며, 징글 벨은 경쾌한 소리를 내며 서로에게 영감을 주고받으며 아이디어를 쏟아낼거에요.
이따금 엉뚱한 상황들이 생길 수도 있구요!`,
    },
  ],
} satisfies MBTI;
