import { Review Model } from './review-model';


export class GemModel {
  id: number;
  name: string;
  price: number;
  description: string;
  imagePath: string;
  invetory: number;
  reviews: ReviewModel[];
};
