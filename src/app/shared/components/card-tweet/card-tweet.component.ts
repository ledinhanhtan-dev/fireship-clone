import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Tweet } from '@core/models/tweet.model';

@Component({
  selector: 'app-card-tweet',
  templateUrl: './card-tweet.component.html',
  styleUrls: ['./card-tweet.component.scss'],
})
export class CardTweetComponent implements OnInit, AfterViewInit {
  @Input() tweet!: Tweet;

  @ViewChild('content') contentRef!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const contentEl = this.contentRef.nativeElement as HTMLDivElement;
    contentEl.innerHTML = this.tweet.content;
  }
}
