import { QUESTIONS } from '@/shared/constants/questions';

export const getQuestion = (id: number) => {
  return QUESTIONS.find((question) => question.id === id);
};
