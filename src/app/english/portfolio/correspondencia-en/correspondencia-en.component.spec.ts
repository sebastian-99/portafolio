import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrespondenciaEnComponent } from './correspondencia-en.component';

describe('CorrespondenciaEnComponent', () => {
  let component: CorrespondenciaEnComponent;
  let fixture: ComponentFixture<CorrespondenciaEnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrespondenciaEnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrespondenciaEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
