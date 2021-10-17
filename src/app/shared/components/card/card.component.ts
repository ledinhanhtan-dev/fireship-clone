import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/core/models/course.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  // TODO: import ts.config
  @Input() course!: Course;

  constructor() {}

  ngOnInit(): void {}
}
