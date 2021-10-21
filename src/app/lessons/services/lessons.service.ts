import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LESSONS_API } from '@core/constants/api.constant';
import { Lesson } from '@core/models/lesson.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { TableOfContent } from '../models/toc.model';

@Injectable({
  providedIn: 'root',
})
export class LessonsService {
  lessons$ = new BehaviorSubject<Lesson[]>([]);
  toc$ = new BehaviorSubject<TableOfContent>([]);

  constructor(private http: HttpClient) {}

  getAllLessons(): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(LESSONS_API);
  }

  getLesson(slug: string): Observable<Lesson> {
    return this.http.get<Lesson>(LESSONS_API + slug);
  }

  setTableOfContent(toc: TableOfContent): void {
    this.toc$.next(toc);
  }
}
