import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaJavascriptComponent } from './grafica-javascript.component';

describe('GraficaJavascriptComponent', () => {
  let component: GraficaJavascriptComponent;
  let fixture: ComponentFixture<GraficaJavascriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaJavascriptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaJavascriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
