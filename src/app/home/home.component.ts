import { Component, OnInit } from '@angular/core';
import { COURSES } from '../core/constants/courses.constant';
import { Course } from '../core/models/course.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  courses: Course[] = COURSES;

  firebaseCourse: Course = {
    name: 'Firebase - The Basics',
    url: 'firebase-quickstart',
    image: 'https://fireship.io/lessons/firebase-quickstart/img/featured.jpg',
    desc: 'Learn the fundamental concepts needed to start building serious apps with Firebase.',
  };

  constructor() {}

  ngOnInit(): void {}
}
