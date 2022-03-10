import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentEnComponent } from './content-en.component';

describe('ContentEnComponent', () => {
  let component: ContentEnComponent;
  let fixture: ComponentFixture<ContentEnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentEnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
