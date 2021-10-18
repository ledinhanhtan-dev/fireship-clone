import { Component, OnInit } from '@angular/core';
import { TWEETS } from '@core/constants/tweets.constant';
import { Tweet } from '@core/models/tweet.model';

@Component({
  selector: 'app-home-testimonial',
  templateUrl: './home-testimonial.component.html',
  styleUrls: ['./home-testimonial.component.scss'],
})
export class HomeTestimonialComponent implements OnInit {
  packs: Tweet[] = TWEETS;

  constructor() {}

  ngOnInit(): void {}
}
