'use client';

import { chatApi } from '@/shared/api/chatApi';
import { QUESTIONS } from '@/shared/constants/questions';
import { ChatResponse } from '@/shared/types/chatApi';
import { useEffect, useState } from 'react';

export default function Home() {
  const [input, setInput] = useState('');
  const [questionIdx, setQuestionIdx] = useState(0);
  const [res, setRes] = useState<ChatResponse[]>([]);

  const [conversation, setConversation] = useState<string[]>([]);
  const addConversation = (chat: string) => {
    setConversation((prev) => [...prev, chat]);
  };
  const nextChat = () => {
    if (questionIdx >= QUESTIONS.length - 1) return;
    setQuestionIdx((prev) => prev + 1);
  };
  const response = (res: string) => {
    addConversation(res);

    const question = QUESTIONS[questionIdx];
    if (question.response) {
      addConversation(question.response);
    }

    nextChat();
  };

  const submit = async () => {
    const question = QUESTIONS[questionIdx];
    if (!question.id) return;
    if (!input) return;

    setInput('');
    response(input);

    chatApi.chat(question.id, input).then((res) => {
      setRes((prev) => [...prev, res]);
    });
  };
  console.log(res);

  useEffect(() => {
    const question = QUESTIONS[questionIdx];

    const id = window.setTimeout(() => {
      addConversation(question.me);

      if (question.isQuestion) return;
      nextChat();
    }, 600 + question.me.length * 50);

    return () => {
      window.clearTimeout(id);
    };
  }, [questionIdx]);

  const result = res
    .map(({ EorI, SorN, TorF, JorP }) => {
      const ei = {
        ...EorI,
        score: (EorI.percent - 50) * EorI.confidence,
      };
      const sn = {
        ...SorN,
        score: (SorN.percent - 50) * SorN.confidence,
      };
      const tf = {
        ...TorF,
        score: (TorF.percent - 50) * TorF.confidence,
      };
      const jp = {
        ...JorP,
        score: (JorP.percent - 50) * JorP.confidence,
      };

      return { EorI: ei, SorN: sn, TorF: tf, JorP: jp };
    })
    .reduce(
      (sum, { EorI, SorN, TorF, JorP }) => {
        sum[EorI.major] += EorI.score;
        sum[SorN.major] += SorN.score;
        sum[TorF.major] += TorF.score;
        sum[JorP.major] += JorP.score;

        return sum;
      },
      {
        E: 0,
        I: 0,
        S: 0,
        N: 0,
        T: 0,
        F: 0,
        J: 0,
        P: 0,
      }
    );
  const qs =
    QUESTIONS.slice(0, questionIdx + 1).filter(({ isQuestion }) => isQuestion)
      .length * 50;
  console.log(result);
  console.log(qs);

  const getScore = (major: number, minor: number) => {
    return ((major - minor) / qs) * 100 + 50;
  };

  return (
    <div>
      <div>
        E / I : {result.E > result.I ? 'E' : 'I'}{' '}
        {result.E > result.I
          ? getScore(result.E, result.I).toFixed(1)
          : getScore(result.I, result.E).toFixed(1)}{' '}
        %
      </div>

      <div>
        S / N : {result.S > result.N ? 'S' : 'N'}{' '}
        {result.S > result.N
          ? getScore(result.S, result.N).toFixed(1)
          : getScore(result.N, result.S).toFixed(1)}{' '}
        %
      </div>

      <div>
        T / F : {result.T > result.F ? 'T' : 'F'}{' '}
        {result.T > result.F
          ? getScore(result.T, result.F).toFixed(1)
          : getScore(result.F, result.T).toFixed(1)}{' '}
        %
      </div>

      <div>
        J / P : {result.J > result.P ? 'J' : 'P'}{' '}
        {result.J > result.P
          ? getScore(result.J, result.P).toFixed(1)
          : getScore(result.P, result.J).toFixed(1)}{' '}
        %
      </div>

      <hr />
      {conversation.map((text, idx) => (
        <div key={idx}>{text}</div>
      ))}
      <hr />
      <input
        placeholder="enter.."
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button onClick={submit}>전송</button>
    </div>
  );
}
