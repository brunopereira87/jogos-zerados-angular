import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlataformCardComponent } from './plataform-card.component';

describe('PlataformCardComponent', () => {
  let component: PlataformCardComponent;
  let fixture: ComponentFixture<PlataformCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlataformCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlataformCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
