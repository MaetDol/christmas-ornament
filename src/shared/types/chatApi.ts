export type ChatResponse = {
  EorI: {
    major: 'E' | 'I';
    percent: number;
    confidence: number;
    reason: string;
  };
  SorN: {
    major: 'S' | 'N';
    percent: number;
    confidence: number;
    reason: string;
  };
  TorF: {
    major: 'T' | 'F';
    percent: number;
    confidence: number;
    reason: string;
  };
  JorP: {
    major: 'J' | 'P';
    percent: number;
    confidence: number;
    reason: string;
  };
};
