import { Review } from "./review";

export type Movie = {
  id: number;
  title: string;
  score: number;
  count: number;
  image: string;
  reviews: Review[];
};
