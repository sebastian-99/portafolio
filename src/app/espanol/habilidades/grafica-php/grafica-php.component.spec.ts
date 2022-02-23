import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaPhpComponent } from './grafica-php.component';

describe('GraficaPhpComponent', () => {
  let component: GraficaPhpComponent;
  let fixture: ComponentFixture<GraficaPhpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaPhpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaPhpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
