import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-code[lang][fileName][code]',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
})
export class CodeComponent implements OnInit {
  @Input() lang!: string;
  @Input() fileName!: string;
  @Input() code!: string;

  constructor() {}

  ngOnInit(): void {}
}
