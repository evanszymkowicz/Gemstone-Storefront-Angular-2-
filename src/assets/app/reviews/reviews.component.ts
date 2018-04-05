import { Component, OnInit, Input } from '@angular/core';

import { GemModel } from '../gem-model';
import { ReviewModel } from '../review-model';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  @Input() gem: GemModel;
  newReview: ReviewModel;

  constructor() { }

  submitClicked() {
    this.gem.reviews.push(this.newReview);
    this.ngOnInit();
  }

  ngOnInit() {
    this.newReview = {
      id: -1,
      createDate: "",
      body: "",
      rating: 0,
      author: ""
    };
  }

}
