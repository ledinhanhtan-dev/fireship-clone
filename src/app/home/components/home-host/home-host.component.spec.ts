import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHostComponent } from './home-host.component';

describe('HomeHostComponent', () => {
  let component: HomeHostComponent;
  let fixture: ComponentFixture<HomeHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeHostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
