import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import {
  DOING_COURSES,
  FIREBASE_COURSE,
  FULLSTACK_COURSES,
  NEW_COURSES,
} from '@core/constants/courses.constant';
import { Course } from '@core/models/course.model';
import { Subscription } from 'rxjs';
import { HomeContent } from './models/home-content.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private homeSub!: Subscription;
  home!: HomeContent;

  constructor(private title: Title, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.title.setTitle('Fireship.io (clone)');
    this.homeSub = this.route.data.subscribe(data => {
      this.home = data[0];
    });
  }

  ngOnDestroy(): void {
    if (this.homeSub) this.homeSub.unsubscribe();
  }
}
