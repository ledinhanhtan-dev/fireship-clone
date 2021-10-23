import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
})
export class FileComponent implements OnInit {
  private _lang: string = '';
  @Input() get lang(): string {
    return this._lang;
  }
  set lang(lang: string) {
    this._lang = lang;
  }

  private _name: string = '';
  @Input() get name(): string {
    return this._name;
  }
  set name(name: string) {
    this._name = name;
  }

  constructor() {}

  ngOnInit(): void {
    console.log(this._lang);
    console.log(this._name);
  }
}
