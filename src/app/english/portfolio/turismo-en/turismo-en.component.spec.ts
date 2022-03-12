import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurismoEnComponent } from './turismo-en.component';

describe('TurismoEnComponent', () => {
  let component: TurismoEnComponent;
  let fixture: ComponentFixture<TurismoEnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurismoEnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurismoEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
