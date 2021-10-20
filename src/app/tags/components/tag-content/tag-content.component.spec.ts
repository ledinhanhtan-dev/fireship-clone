import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagContentComponent } from './tag-content.component';

describe('TagContentComponent', () => {
  let component: TagContentComponent;
  let fixture: ComponentFixture<TagContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
