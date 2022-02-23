import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaJqueryComponent } from './grafica-jquery.component';

describe('GraficaJqueryComponent', () => {
  let component: GraficaJqueryComponent;
  let fixture: ComponentFixture<GraficaJqueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaJqueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaJqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
