import { Component, Input, OnInit } from '@angular/core';
import { TWEETS } from '@core/constants/tweets.constant';
import { Tweet } from '@core/models/tweet.model';

type ArrayOfTweets = Tweet[][];

@Component({
  selector: 'app-home-testimonial',
  templateUrl: './home-testimonial.component.html',
  styleUrls: ['./home-testimonial.component.scss'],
})
export class HomeTestimonialComponent implements OnInit {
  @Input() tweetsPerColumn: 2 | 3 = 2;
  packs!: ArrayOfTweets;

  constructor() {}

  ngOnInit(): void {
    this.generatePackOfNTweets(this.tweetsPerColumn);
  }

  private generatePackOfNTweets(n: 2 | 3) {
    let packsOrUndefined: (Tweet[] | undefined)[] = [];

    if (n === 2) {
      packsOrUndefined = TWEETS.slice(0, 6).map((tweet, index, array) => {
        if (index % 2 === 0) return [tweet, array[index + 1]];
        else return undefined;
      });
    }

    if (n === 3) {
      packsOrUndefined = TWEETS.slice(0, 9).map((tweet, index, array) => {
        if (index % 3 === 0)
          return [tweet, array[index + 1], array[index + 2]].filter(
            (tweet) => tweet !== undefined
          );
        else return undefined;
      });
    }

    const filteredPacks = packsOrUndefined.filter((result) => {
      return result !== undefined;
    }) as ArrayOfTweets;

    this.packs = filteredPacks;
  }
}
