import { Component, OnInit } from '@angular/core';
import { COURSES } from '@core/constants/courses.constant';
import { Course } from '@core/models/course.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses: Course[] = COURSES;

  constructor() {}

  ngOnInit(): void {}
}
