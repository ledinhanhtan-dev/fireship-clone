import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonAuthorComponent } from './lesson-author.component';

describe('LessonAuthorComponent', () => {
  let component: LessonAuthorComponent;
  let fixture: ComponentFixture<LessonAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonAuthorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
