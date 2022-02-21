import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrespondenciaComponent } from './correspondencia.component';

describe('CorrespondenciaComponent', () => {
  let component: CorrespondenciaComponent;
  let fixture: ComponentFixture<CorrespondenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrespondenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrespondenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
