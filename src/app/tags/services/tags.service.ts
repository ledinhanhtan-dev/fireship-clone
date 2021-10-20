import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TAGS_API } from '@core/constants/api.constant';
import { Tag } from '@core/models/tag.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TagsService {
  constructor(private http: HttpClient) {}

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(TAGS_API);
  }

  getTag(name: string): Observable<Tag> {
    return this.http.get<Tag>(TAGS_API + name);
  }
}
