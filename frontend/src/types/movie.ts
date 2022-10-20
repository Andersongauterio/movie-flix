import { Review } from "./review";

export type Movie = {
  id: number;
  title: string;
  subTitle: number;
  year: number;
  imgUrl: string;
  synopsis: string;
  reviews: Review[];
};
