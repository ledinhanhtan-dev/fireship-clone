import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Lesson } from '@core/models/lesson.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lesson-content',
  templateUrl: './lesson-content.component.html',
  styleUrls: ['./lesson-content.component.scss'],
})
export class LessonContentComponent implements OnInit, OnDestroy {
  lessonSub!: Subscription;
  lesson!: Lesson;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.lessonSub = this.route.data.subscribe(data => (this.lesson = data[0]));
  }

  ngOnDestroy(): void {
    if (this.lessonSub) this.lessonSub.unsubscribe();
  }
}
