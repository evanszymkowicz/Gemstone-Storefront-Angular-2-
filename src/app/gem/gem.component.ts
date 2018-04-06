import { Component, OnInit, Input } from '@angular/core';

import { GemModel } from '../gem-model';
import { CartModel } from '../cart-model';

@Component({
  selector: 'app-gem',
  templateUrl: './gem.component.html',
  styleUrls: ['./gem.component.css']
})
export class GemComponent implements OnInit {

  @Input() gem: GemModel;
  @Input() cart: CartModel;

  addToCart() {
    // tis.CartItemModel
    this.gem.inventory -= 1;
    this.cart.totalQuantity += 1;
    this.cart.totalPrice += this.gem.price;

    var flag = false;

    for (let item of this.cart.items) {
      if (item.gemid == this.gem.id) {
        item.quantity += 1;
        flag = true;
      }
    }

    if (flag == false) {
      this.cart.items.push(
        {
          gemid: this.gem.id,
          name: this.gem.name,
          unitPrice: this.gem.price,
          quantity: 1
        }
      );
    };
  }

  constructor() { }

  ngOnInit() {
  }

}
