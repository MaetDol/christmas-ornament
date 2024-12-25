import { MBTIImages } from "@/shared/constants/mbtis/images";
import { MBTI } from "@/shared/types/mbti";

export const INFJ = {
  title: `주변 사람들에게
  응원을 보내는 산타`,
  image: MBTIImages.INFJ,
  description: {
    title: "이 마음을 울리는 산타는요..",
    content: [
      "다른 사람의 힘들거나 슬픈 마음을 먼저 알아차리고, 위로의 손길을 건내요.",
      "본인만의 기준으로, 확실하게 나쁜아이와 착한아이를 구분하고, 선물을 줘요.",
      "미래를 그리고, 함께 일하는 엘프들이 따라와줄 수 있게 이야기해줘요.",
      "깐깐하고! 완벽하게 선물을 포장해요.",
      "혼자 코코아를 마시며 보내는 시간이 필요해요.",
    ],
  },
  friends: [
    {
      mbti: "ENTP",
      image: MBTIImages.ENTP,
      description: `산타의 마음을 울리는 종소리..!
      깊이있는 논의를 할 수 있을거에요.`,
    },
    {
      mbti: "ENTJ",
      image: MBTIImages.ENTJ,
      description: `음음 맞지맞지!
산타를 잘 이해하고 공감해주는 루돌프!`,
    },
    {
      mbti: "ENFP",
      image: MBTIImages.ENFP,
      description: `산타가 고민을 이야기하면,
      반짝이는 아이디어로 답을줘요.`,
    },
    {
      mbti: "INFP",
      image: MBTIImages.INFP,
      description: `한번 친해지면, 끝도없는 공감의 깊이..!
둘이 만나면 잔잔한 그런 무드가 있어요.`,
    },
  ],
} satisfies MBTI;
