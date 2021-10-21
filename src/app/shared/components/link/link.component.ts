import { Component, Input, OnInit } from '@angular/core';
import {
  ButtonColor,
  ButtonSize,
  ButtonType,
} from '@shared/models/button.model';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
})
export class LinkComponent implements OnInit {
  @Input() size: ButtonSize = 'md';
  @Input() type: ButtonType = 'outline';
  @Input() color: ButtonColor = 'neutral';
  @Input() link: string = '';

  constructor() {}

  ngOnInit(): void {}
}
