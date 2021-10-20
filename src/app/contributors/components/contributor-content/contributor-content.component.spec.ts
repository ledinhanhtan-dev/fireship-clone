import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributorContentComponent } from './contributor-content.component';

describe('ContributorContentComponent', () => {
  let component: ContributorContentComponent;
  let fixture: ComponentFixture<ContributorContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContributorContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributorContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
