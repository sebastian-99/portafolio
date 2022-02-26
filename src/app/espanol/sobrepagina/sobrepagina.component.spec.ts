import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobrepaginaComponent } from './sobrepagina.component';

describe('SobrepaginaComponent', () => {
  let component: SobrepaginaComponent;
  let fixture: ComponentFixture<SobrepaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobrepaginaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SobrepaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
