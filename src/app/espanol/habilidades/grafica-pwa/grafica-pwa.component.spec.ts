import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaPwaComponent } from './grafica-pwa.component';

describe('GraficaPwaComponent', () => {
  let component: GraficaPwaComponent;
  let fixture: ComponentFixture<GraficaPwaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaPwaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaPwaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
