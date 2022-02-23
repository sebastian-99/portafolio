import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaLaravelComponent } from './grafica-laravel.component';

describe('GraficaLaravelComponent', () => {
  let component: GraficaLaravelComponent;
  let fixture: ComponentFixture<GraficaLaravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaLaravelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaLaravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
