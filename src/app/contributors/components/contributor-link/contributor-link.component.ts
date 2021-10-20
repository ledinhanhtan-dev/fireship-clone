import { Component, Input, OnInit } from '@angular/core';

type LinkType =
  | 'github'
  | 'linkedin'
  | 'medium'
  | 'portfolio'
  | 'facebook'
  | 'twitter'
  | 'youtube';

@Component({
  selector: 'app-contributor-link',
  templateUrl: './contributor-link.component.html',
  styleUrls: ['./contributor-link.component.scss'],
})
export class ContributorLinkComponent implements OnInit {
  @Input() type!: LinkType;
  @Input() link!: string;

  constructor() {}

  ngOnInit(): void {}
}
