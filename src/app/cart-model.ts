import { CartItemModel } from './cart-item-model';

export class CartModel {
  items: CartItemModel[];
  totalQuantity: number;
  totalPrice: number;
}
