import { Component, Input, OnInit } from '@angular/core';

type Language = 'html' | 'css' | 'javascript' | 'typescript';
@Component({
  selector: 'app-code[languages][fileName][code]',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
})
export class CodeComponent implements OnInit {
  @Input() language!: Language;
  @Input() fileName!: string;
  @Input() code!: string;

  constructor() {}

  ngOnInit(): void {}
}
