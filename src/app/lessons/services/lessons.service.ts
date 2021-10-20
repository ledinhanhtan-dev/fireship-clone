import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LESSONS_API } from '@core/constants/api.constant';
import { LESSONS } from '@core/constants/lessons.constant';
import { Lesson } from '@core/models/lesson.model';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LessonsService {
  lessons$ = new BehaviorSubject<Lesson[]>([]);

  constructor(private http: HttpClient) {}

  getLessons(): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(LESSONS_API);
  }

  getLessonBySlug(slug: string): Observable<Lesson> {
    return this.http.get<Lesson>(LESSONS_API + slug);
  }
}
