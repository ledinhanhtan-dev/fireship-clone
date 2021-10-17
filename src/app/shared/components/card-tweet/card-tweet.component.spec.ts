import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTweetComponent } from './card-tweet.component';

describe('CardTweetComponent', () => {
  let component: CardTweetComponent;
  let fixture: ComponentFixture<CardTweetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTweetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
