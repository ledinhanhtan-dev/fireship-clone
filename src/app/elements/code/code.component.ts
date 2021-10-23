import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
})
export class CodeComponent implements OnInit {
  private _lang: string = '';
  @Input() get lang(): string {
    return this._lang;
  }
  set lang(lang: string) {
    this._lang = lang;
  }

  private _code: string = '';
  @Input() get code(): string {
    return this._code;
  }
  set code(code: string) {
    this._code = code;
  }
  constructor() {}

  ngOnInit(): void {}
}
