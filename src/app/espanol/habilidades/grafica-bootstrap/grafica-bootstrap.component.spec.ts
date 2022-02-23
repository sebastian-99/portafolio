import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaBootstrapComponent } from './grafica-bootstrap.component';

describe('GraficaBootstrapComponent', () => {
  let component: GraficaBootstrapComponent;
  let fixture: ComponentFixture<GraficaBootstrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaBootstrapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
