import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaMysqlComponent } from './grafica-mysql.component';

describe('GraficaMysqlComponent', () => {
  let component: GraficaMysqlComponent;
  let fixture: ComponentFixture<GraficaMysqlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaMysqlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaMysqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
