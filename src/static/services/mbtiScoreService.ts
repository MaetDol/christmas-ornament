import { ChatResponse } from "@/shared/types/chatApi";

class MBTIScoreService {
  public calculate(input: ChatResponse[]): string {
    const result = input
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

    const first = result.E > result.I ? "E" : "I";
    const second = result.S > result.N ? "S" : "N";
    const third = result.T > result.F ? "T" : "F";
    const fourth = result.J > result.P ? "J" : "P";

    return first + second + third + fourth;
  }
}

export const mbtiScoreService = new MBTIScoreService();
