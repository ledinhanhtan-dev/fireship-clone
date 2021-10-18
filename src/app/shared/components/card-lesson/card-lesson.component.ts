import { Component, Input, OnInit } from '@angular/core';
import { Lesson } from '@core/models/lesson.model';

@Component({
  selector: 'app-card-lesson',
  templateUrl: './card-lesson.component.html',
  styleUrls: ['./card-lesson.component.scss'],
})
export class CardLessonComponent implements OnInit {
  @Input() image: boolean = false;
  @Input() lesson!: Lesson;

  constructor() {}

  ngOnInit(): void {}
}
