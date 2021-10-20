import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Contributor } from '@core/models/contributor.model';
import { ContributorsService } from '../services/contributors.service';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContributorsResolver
  implements Resolve<Contributor[] | Contributor | boolean>
{
  constructor(
    private router: Router,
    private contrService: ContributorsService,
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<Contributor[] | Contributor | boolean> {
    const slug = route.params.slug;

    return this.getOneOrGetAllContributors(slug).pipe(
      catchError(() => {
        this.router.navigateByUrl('/not-found');
        return of(false);
      }),
    );
  }

  private getOneOrGetAllContributors(
    slug: string | undefined,
  ): Observable<Contributor | Contributor[]> {
    if (slug) return this.contrService.getContributor(slug);
    else return this.contrService.getAllContributors();
  }
}
