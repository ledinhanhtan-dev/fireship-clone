import { Component, OnInit } from '@angular/core';
import { NEW_COURSES } from '@core/constants/courses.constant';
import { LESSONS } from '@core/constants/lessons.constant';
import { TAGS } from '@core/constants/tags.constants';
import { Course } from '@core/models/course.model';
import { Lesson } from '@core/models/lesson.model';
import { Tag } from '@core/models/tag.model';

@Component({
  selector: 'app-tag-page',
  templateUrl: './tag-page.component.html',
  styleUrls: ['./tag-page.component.scss'],
})
export class TagPageComponent implements OnInit {
  tag: Tag = TAGS[2];
  lesson: Lesson = LESSONS[2];
  course: Course = NEW_COURSES[0];
  array = new Array(20).fill('');

  desc: string =
    'Firebase is a badass BaaS giving you functionality like analytics, databases, messaging, cloud functions, and crash reporting so you can develop quickly and focus on your user experience.';

  constructor() {}

  ngOnInit(): void {}
}
