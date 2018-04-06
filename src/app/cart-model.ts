// Typescript Syntax, V annoying *//
//cart-model.ts
import { CartItemModel } from './cart-item-model';

export class CartModel {
  items: CartItemModel[];
  totalQuantity: number;
  totalPrice: number;
}
