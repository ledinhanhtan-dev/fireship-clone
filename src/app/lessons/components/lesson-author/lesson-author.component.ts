import { Component, Input, OnInit } from '@angular/core';
import { Contributor } from '@core/models/contributor.model';

@Component({
  selector: 'app-lesson-author',
  templateUrl: './lesson-author.component.html',
  styleUrls: ['./lesson-author.component.scss'],
})
export class LessonAuthorComponent implements OnInit {
  @Input() contributor!: Contributor;

  constructor() {}

  ngOnInit(): void {}
}
