import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NEW_COURSES } from '@core/constants/courses.constant';
import { TAGS } from '@core/constants/tags.constants';
import { Course } from '@core/models/course.model';
import { Lesson } from '@core/models/lesson.model';
import { Tag } from '@core/models/tag.model';
import { stringHelper } from 'app/helpers/string-helper';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tag-content',
  templateUrl: './tag-content.component.html',
  styleUrls: ['./tag-content.component.scss'],
})
export class TagContentComponent implements OnInit, OnDestroy {
  private tagSub!: Subscription;

  tag: Tag = TAGS[2];
  course: Course = NEW_COURSES[0];
  array = new Array(20).fill('');

  desc: string =
    'Firebase is a badass BaaS giving you functionality like analytics, databases, messaging, cloud functions, and crash reporting so you can develop quickly and focus on your user experience.';

  constructor(private title: Title, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.tagSub = this.route.data.subscribe(data => {
      this.tag = data[0];
      this.setTitle(this.tag.name);
    });
  }

  ngOnDestroy(): void {
    if (this.tagSub) this.tagSub.unsubscribe();
  }

  private setTitle(name: string) {
    const title = name.split('-').join(' ');
    this.title.setTitle(stringHelper.uppercaseFirstLetter(title));
  }
}
