import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Tag } from '@core/models/tag.model';
import { TagsService } from '../services/tags.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TagsResolver implements Resolve<Tag | Tag[] | boolean> {
  constructor(private router: Router, private tagsServices: TagsService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<Tag | Tag[] | boolean> {
    const name = route.params.name;

    return this.getOneOrGetAllTags(name).pipe(
      catchError(error => {
        this.router.navigateByUrl('/page-not-found');
        return of(false);
      }),
    );
  }

  private getOneOrGetAllTags(
    name: string | undefined,
  ): Observable<Tag | Tag[]> {
    if (name) return this.tagsServices.getTag(name);
    else return this.tagsServices.getAllTags();
  }
}
