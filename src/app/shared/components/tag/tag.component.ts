import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Tag } from '@core/models/tag.model';

type Size = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
})
export class TagComponent implements OnInit {
  @Input() size: Size = 'md';
  @Input() tag!: Tag;

  constructor() {}

  ngOnInit(): void {}
}
