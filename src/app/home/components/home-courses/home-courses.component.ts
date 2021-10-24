import { Component, Input, OnInit } from '@angular/core';
import { Course } from '@core/models/course.model';
import {
  DOING_COURSES,
  FIREBASE_COURSE,
  FULLSTACK_COURSES,
  NEW_COURSES,
} from '@core/constants/courses.constant';
import { HomeContent } from 'app/home/models/home-content.model';

@Component({
  selector: 'app-home-courses',
  templateUrl: './home-courses.component.html',
  styleUrls: ['./home-courses.component.scss'],
})
export class HomeCoursesComponent implements OnInit {
  @Input() home!: HomeContent;

  constructor() {}

  ngOnInit(): void {}
}
