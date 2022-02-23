import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaHtmlComponent } from './grafica-html.component';

describe('GraficaHtmlComponent', () => {
  let component: GraficaHtmlComponent;
  let fixture: ComponentFixture<GraficaHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaHtmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
