import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Lesson } from '@core/models/lesson.model';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss'],
})
export class LessonsComponent implements OnInit, OnDestroy {
  lessonsSub!: Subscription;

  lessons!: Lesson[];

  constructor(private title: Title, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.title.setTitle('Lessons');

    this.lessonsSub = this.route.data.subscribe(data => {
      this.lessons = data[0];
    });
  }

  ngOnDestroy(): void {
    if (this.lessonsSub) this.lessonsSub.unsubscribe();
  }
}
