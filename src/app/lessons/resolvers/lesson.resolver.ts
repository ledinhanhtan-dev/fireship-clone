import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Lesson } from '@core/models/lesson.model';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LessonsService } from '../services/lessons.service';

@Injectable({
  providedIn: 'root',
})
export class LessonResolver implements Resolve<Lesson | boolean> {
  constructor(private router: Router, private lsService: LessonsService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<Lesson | boolean> {
    const slug = route.params.slug;

    return this.lsService.getLesson(slug).pipe(
      catchError(error => {
        this.router.navigateByUrl('/page-not-found');
        return of(false);
      }),
    );
  }
}
