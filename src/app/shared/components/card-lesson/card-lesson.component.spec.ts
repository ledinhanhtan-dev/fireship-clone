import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLessonComponent } from './card-lesson.component';

describe('CardLessonComponent', () => {
  let component: CardLessonComponent;
  let fixture: ComponentFixture<CardLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardLessonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
