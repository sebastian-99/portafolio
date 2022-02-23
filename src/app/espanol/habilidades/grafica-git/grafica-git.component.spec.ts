import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaGitComponent } from './grafica-git.component';

describe('GraficaGitComponent', () => {
  let component: GraficaGitComponent;
  let fixture: ComponentFixture<GraficaGitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaGitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaGitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
