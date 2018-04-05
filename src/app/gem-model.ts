import { ReviewModel } from './review-model';

export class GemModel {
  id: number;
  name: string;
  price: number;
  description: string;
  imagePath: string;
  inventory: number;
  reviews: ReviewModel[];
}
