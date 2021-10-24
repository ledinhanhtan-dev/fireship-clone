import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import {
  DOING_COURSES,
  FIREBASE_COURSE,
  FULLSTACK_COURSES,
  NEW_COURSES,
} from '@core/constants/courses.constant';
import { LessonsService } from 'app/lessons/services/lessons.service';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HomeContent } from '../models/home-content.model';

@Injectable({
  providedIn: 'root',
})
export class HomeResolver implements Resolve<HomeContent | boolean> {
  constructor(private lsService: LessonsService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<HomeContent | boolean> {
    return this.lsService.getAllLessons().pipe(
      map(lessons => {
        const homeContent: HomeContent = {
          newCourses: NEW_COURSES,
          hotCourses: DOING_COURSES,
          fullStackCourses: FULLSTACK_COURSES,
          singleCourse: FIREBASE_COURSE,
          lessons,
        };

        return homeContent;
      }),
      catchError(error => {
        this.router.navigateByUrl('');
        return of(false);
      }),
    );
  }
}
