import { Component, OnInit } from '@angular/core';
import {
  DOING_COURSES,
  FIREBASE_COURSE,
  FULLSTACK_COURSES,
  NEW_COURSES,
} from '@core/constants/courses.constant';
import { Course } from '@core/models/course.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  newCourses: Course[] = NEW_COURSES;
  doingCourses: Course[] = DOING_COURSES;
  fullstackCourses: Course[] = FULLSTACK_COURSES;
  firebaseCourse: Course = FIREBASE_COURSE;

  constructor() {}

  ngOnInit(): void {}
}
