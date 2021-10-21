import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonTocComponent } from './lesson-toc.component';

describe('LessonTocComponent', () => {
  let component: LessonTocComponent;
  let fixture: ComponentFixture<LessonTocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonTocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonTocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
