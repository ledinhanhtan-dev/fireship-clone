import { Component, Input, OnInit } from '@angular/core';
import { Course } from '@core/models/course.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() withButton: boolean = false;
  @Input() course!: Course;

  constructor() {}

  ngOnInit(): void {}
}
