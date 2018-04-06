import { Component, OnInit, Input } from '@angular/core';

import { GemModel } from '../gem-model';
import { GEMS } from '../gems';
import { CartModel } from '../cart-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() cart: CartModel;
  @Input() gem: GemModel;

  homeGems: GemModel[] = GEMS;

  constructor() { }

  ngOnInit() {
  }

}
