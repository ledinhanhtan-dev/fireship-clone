import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonQnaComponent } from './lesson-qna.component';

describe('LessonQnaComponent', () => {
  let component: LessonQnaComponent;
  let fixture: ComponentFixture<LessonQnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonQnaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonQnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
