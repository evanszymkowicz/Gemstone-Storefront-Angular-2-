import { Component, OnInit } from '@angular/core';
import { GemModel } from '../gem-model';

import { GEMS } from '../gems';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeGems: GemModel[] = GEMS;

  constructor() { }

  ngOnInit() {
  }

}
