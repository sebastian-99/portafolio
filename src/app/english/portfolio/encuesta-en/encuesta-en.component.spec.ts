import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestaEnComponent } from './encuesta-en.component';

describe('EncuestaEnComponent', () => {
  let component: EncuestaEnComponent;
  let fixture: ComponentFixture<EncuestaEnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncuestaEnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuestaEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
