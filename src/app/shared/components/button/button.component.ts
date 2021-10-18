import { Component, Input, OnInit } from '@angular/core';

type Color =
  | 'neutral'
  | 'blue'
  | 'green'
  | 'orange'
  | 'pink'
  | 'purple'
  | 'red';

type Type = 'flat' | 'outline';

type Size = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() size: Size = 'md';
  @Input() type: Type = 'outline';
  @Input() color: Color = 'neutral';
  @Input() link: string = '';

  constructor() {}

  ngOnInit(): void {}
}
