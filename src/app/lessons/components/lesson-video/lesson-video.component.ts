import { Component, Input, OnInit } from '@angular/core';
import { Lesson } from '@core/models/lesson.model';

@Component({
  selector: 'app-lesson-video',
  templateUrl: './lesson-video.component.html',
  styleUrls: ['./lesson-video.component.scss'],
})
export class LessonVideoComponent implements OnInit {
  @Input() lesson!: Lesson;

  constructor() {}

  ngOnInit(): void {}
}
