import { Component, Input, OnInit } from '@angular/core';
import { Course } from '@core/models/course.model';

@Component({
  selector: 'app-card-course',
  templateUrl: './card-course.component.html',
  styleUrls: ['./card-course.component.scss'],
})
export class CardCourseComponent implements OnInit {
  @Input() withButton: boolean = false;
  @Input() course!: Course;

  constructor() {}

  ngOnInit(): void {}
}
