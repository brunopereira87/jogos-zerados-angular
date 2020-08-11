import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlataformsListComponent } from './plataforms-list.component';

describe('PlataformsListComponent', () => {
  let component: PlataformsListComponent;
  let fixture: ComponentFixture<PlataformsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlataformsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlataformsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
