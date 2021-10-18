import { Component, OnInit } from '@angular/core';
import { LESSONS } from '@core/constants/lessons.constant';
import { Lesson } from '@core/models/lesson.model';

@Component({
  selector: 'app-home-lessons',
  templateUrl: './home-lessons.component.html',
  styleUrls: ['./home-lessons.component.scss'],
})
export class HomeLessonsComponent implements OnInit {
  lessons: Lesson[] = LESSONS;

  constructor() {}

  ngOnInit(): void {}
}
