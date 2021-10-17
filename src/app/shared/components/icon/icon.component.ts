import { Component, Input, OnInit } from '@angular/core';

type Size = 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'max';
interface WidthHeight {
  w: number;
  h: number;
}

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  @Input() iconId!: string;
  @Input() size!: Size;
  @Input() wh!: WidthHeight;

  constructor() {}

  ngOnInit(): void {}
}
