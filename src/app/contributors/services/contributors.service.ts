import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONTRIBUTORS_API } from '@core/constants/api.constant';
import { Contributor } from '@core/models/contributor.model';

@Injectable({
  providedIn: 'root',
})
export class ContributorsService {
  constructor(private http: HttpClient) {}

  getContributors(): Observable<Contributor[]> {
    return this.http.get<Contributor[]>(CONTRIBUTORS_API);
  }
}
