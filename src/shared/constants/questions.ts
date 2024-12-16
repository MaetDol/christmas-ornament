type Question = {
  id?: number;
  me: string;
  isQuestion: boolean;
  response?: string;
};

export const QUESTIONS: Question[] = [
  // Intro
  { me: '안녕! 오랜만이야~~', isQuestion: false },
  {
    me: '곧 크리스마스기도 하고, 생각나서 연락했지뭐야?',
    isQuestion: false,
  },
  {
    me: '크리스마스!! 넘넘 기대되지않아?',
    isQuestion: false,
  },
  { me: '나는 한 해를 마무리하는 파트 같아서 너무 좋아.', isQuestion: false },

  // Questions
  // 1
  {
    id: 1,
    me: '너는 크리스마스 저녁을 어떻게 보내고 싶어?',
    isQuestion: true,
    response: '오.. 그렇구나! 꽤 기대되는걸?',
  },
  // 2
  {
    id: 2,
    me: '맞아! 캐롤도 빠질 수 없지. 나는 매번 듣던걸 들어.\n너는 어때? 새로 나오는 것도 찾아듣는 편이야?',
    isQuestion: true,
    response: '음음. 캐롤이란 점에서 좋은거지!',
  },
  // 3
  {
    me: '아 참, 나 이번에 방 크리스마스 분위기로 꾸몄는데, 너무 좋은거 있지?',
    isQuestion: false,
  },
  {
    me: '환하고 밝게 조명도 잔뜩 달았지~',
    isQuestion: false,
  },
  {
    id: 3,
    me: '어때? 너도 방 꾸몄어? 환~하게? 아니면 잔잔.. 하게?',
    isQuestion: true,
    response: '헉 그렇구나.. 그래도 연말이니 한번 놀러가보고 싶은걸!',
  },
  // 4
  {
    me: '맞아, 놀러간다고 하니 생각났는데',
    isQuestion: false,
  },
  {
    id: 4,
    me: '너는 모이면 북적북적하게 다같이 모이는게 좋아?\n아니면 역시 조용한 분위기가 좋아?',
    isQuestion: true,
    response: '역시 그렇지? 그래도 좋은 사람이랑 시간을 보낸다는게 중요한거지!',
  },
  // 5
  {
    id: 5,
    me: '아아! 그것두 있따! 너 내년 목표나 계획 세운거 있어?',
    isQuestion: true,
    response:
      '오호... 그렇구만! 나도 나름대로 계획이 있지만, 뭐가 됐든 노력하는게 중요하니까~',
  },
  // 6
  {
    id: 6,
    me: '있잖아 있잖아~ 너는 선물할때 먼저 물어보는 편이야? 아니면 서프라이즈~! 로 감동할만한걸 주는 편이야?',
    isQuestion: true,
    response:
      '음음! 그렇구나! 난 둘다 좋은데, 서프라이즈로 주는게 더 기억에 남는거 같아!',
  },

  // Fin
  {
    me: '간만에 연락해서 너무 좋았어',
    isQuestion: false,
  },
  {
    me: '이번 크리스마스를 위해 내가 준비한 카드야!',
    isQuestion: false,
  },
  {
    me: '보자마자 네가 생각나서 집어왔는데, 어때? 완전 너랑 똑같지 않아?',
    isQuestion: false,
  },
  {
    me: '올 한해도 넘 고생했구~ 연말 잘 지내! 기회되면 또 보자!',
    isQuestion: false,
  },
];
