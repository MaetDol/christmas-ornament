import { StaticImageData } from "next/image";

export type Friend = {
  image: StaticImageData;
  description: string;
  mbti: string;
};

export type Description = {
  title: string;
  content: string[];
};

export type MBTI = {
  title: string;
  image: StaticImageData;
  description: Description;
  friends: Friend[];
};
