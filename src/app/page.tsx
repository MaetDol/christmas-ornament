'use client';

import { QUESTIONS } from '@/shared/constants/questions';
import { ChatResponse } from '@/shared/types/chatApi';
import { useState } from 'react';

export default function Home() {
  const [questionIdx] = useState(0);
  const [res] = useState<ChatResponse[]>([]);

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
    </div>
  );
}
