import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsPaginationComponent } from './lessons-pagination.component';

describe('LessonsPaginationComponent', () => {
  let component: LessonsPaginationComponent;
  let fixture: ComponentFixture<LessonsPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonsPaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonsPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
