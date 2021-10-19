import { Component, OnDestroy, OnInit } from '@angular/core';
import { LessonsService } from './services/lessons.service';
import { Lesson } from '@core/models/lesson.model';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss'],
})
export class LessonsComponent implements OnInit, OnDestroy {
  lessonsSub!: Subscription;

  lessons!: Lesson[];

  constructor(
    private route: ActivatedRoute,
    private lessonsService: LessonsService,
  ) {}

  ngOnInit(): void {
    this.lessonsSub = this.route.data.subscribe(
      data => (this.lessons = data[0]),
    );
  }

  ngOnDestroy(): void {
    if (this.lessonsSub) this.lessonsSub.unsubscribe();
  }
}
