import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributorLinkComponent } from './contributor-link.component';

describe('ContributorLinkComponent', () => {
  let component: ContributorLinkComponent;
  let fixture: ComponentFixture<ContributorLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContributorLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributorLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
