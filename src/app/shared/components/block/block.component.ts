import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss'],
})
export class BlockComponent implements OnInit {
  @Input() heading!: string;
  @Input() subheading!: string;

  @Input() gradientHeading: boolean = false;
  firstWord!: string;
  restWords!: string;

  constructor() {}

  ngOnInit(): void {
    if (this.gradientHeading) this.produceWords();
  }

  private produceWords() {
    const words = this.heading.split(' ');
    this.firstWord = words[0];
    this.restWords = words.slice(1).join(' ');
  }
}
