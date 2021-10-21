import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Lesson } from '@core/models/lesson.model';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { LessonsService } from '../services/lessons.service';

@Injectable({
  providedIn: 'root',
})
export class LessonsResolver implements Resolve<Lesson[] | boolean> {
  constructor(private lsService: LessonsService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<Lesson[] | boolean> {
    let page = route.params.page;
    if (page === undefined) page = '1';

    console.log(page);

    return this.lsService.getAllLessons().pipe(
      tap(ls => this.lsService.lessons$.next(ls)),
      catchError(error => {
        this.router.navigateByUrl('lessons');
        return of(false);
      }),
    );
  }
}
