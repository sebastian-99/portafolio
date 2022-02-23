import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaCssComponent } from './grafica-css.component';

describe('GraficaCssComponent', () => {
  let component: GraficaCssComponent;
  let fixture: ComponentFixture<GraficaCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaCssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
