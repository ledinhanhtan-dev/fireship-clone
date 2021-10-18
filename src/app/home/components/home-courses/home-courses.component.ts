import { Component, OnInit } from '@angular/core';
import { Course } from '@core/models/course.model';
import {
  DOING_COURSES,
  FIREBASE_COURSE,
  FULLSTACK_COURSES,
  NEW_COURSES,
} from '@core/constants/courses.constant';

@Component({
  selector: 'app-home-courses',
  templateUrl: './home-courses.component.html',
  styleUrls: ['./home-courses.component.scss'],
})
export class HomeCoursesComponent implements OnInit {
  newCourses: Course[] = NEW_COURSES;
  doingCourses: Course[] = DOING_COURSES;
  fullstackCourses: Course[] = FULLSTACK_COURSES;
  firebaseCourse: Course = FIREBASE_COURSE;

  constructor() {}

  ngOnInit(): void {}
}
