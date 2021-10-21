import { Component, Input, OnInit } from '@angular/core';
import {
  ButtonColor,
  ButtonSize,
  ButtonType,
} from '@shared/models/button.model';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() size: ButtonSize = 'md';
  @Input() type: ButtonType = 'outline';
  @Input() color: ButtonColor = 'neutral';
  @Input() link: string = '';

  constructor() {}

  ngOnInit(): void {}
}
