import { TestBed } from '@angular/core/testing';

import { LessonsResolver } from './lessons.resolver';

describe('LessonsResolver', () => {
  let resolver: LessonsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(LessonsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
