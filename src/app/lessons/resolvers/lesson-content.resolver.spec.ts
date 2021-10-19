import { TestBed } from '@angular/core/testing';

import { LessonContentResolver } from './lesson-content.resolver';

describe('LessonContentResolver', () => {
  let resolver: LessonContentResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(LessonContentResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
