import { TestBed } from '@angular/core/testing';

import { ContributorsResolver } from './contributors.resolver';

describe('ContributorsResolver', () => {
  let resolver: ContributorsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ContributorsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
