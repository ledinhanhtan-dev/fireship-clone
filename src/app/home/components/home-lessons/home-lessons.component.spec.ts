import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLessonsComponent } from './home-lessons.component';

describe('HomeLessonsComponent', () => {
  let component: HomeLessonsComponent;
  let fixture: ComponentFixture<HomeLessonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeLessonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
