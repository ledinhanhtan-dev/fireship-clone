import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Lesson } from '@core/models/lesson.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss'],
})
export class LessonComponent implements OnInit {
  private lessonSub!: Subscription;
  lesson!: Lesson;

  constructor(private title: Title, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.lessonSub = this.route.data.subscribe(data => {
      this.lesson = data[0];
      this.title.setTitle(this.lesson.name);
    });
  }

  ngOnDestroy(): void {
    if (this.lessonSub) this.lessonSub.unsubscribe();
  }
}
