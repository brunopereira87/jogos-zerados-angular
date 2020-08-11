import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameFeaturedComponent } from './game-featured.component';

describe('GameFeaturedComponent', () => {
  let component: GameFeaturedComponent;
  let fixture: ComponentFixture<GameFeaturedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameFeaturedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
