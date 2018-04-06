import { Component } from '@angular/core';
import { CartModel } from './cart-model';
import { CartItemModel } from './cart-item-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cart: CartModel = {
    totalPrice: 0,
    totalQuantity: 0,
    items: []
  }

  title = 'app';
}
