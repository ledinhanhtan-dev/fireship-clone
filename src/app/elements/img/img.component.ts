import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent implements OnInit {
  private _src: string = '';
  @Input() get src(): string {
    return this._src;
  }
  set src(src: string) {
    this._src = src;
  }

  constructor() {}

  ngOnInit(): void {}
}
