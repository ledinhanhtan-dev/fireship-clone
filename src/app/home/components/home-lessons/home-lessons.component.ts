import { Component, OnInit } from '@angular/core';
import { Lesson } from '@core/models/lesson.model';

@Component({
  selector: 'app-home-lessons',
  templateUrl: './home-lessons.component.html',
  styleUrls: ['./home-lessons.component.scss'],
})
export class HomeLessonsComponent implements OnInit {
  lessons: Lesson[] = [];

  constructor() {}

  ngOnInit(): void {}
}
