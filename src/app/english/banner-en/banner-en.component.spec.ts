import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerEnComponent } from './banner-en.component';

describe('BannerEnComponent', () => {
  let component: BannerEnComponent;
  let fixture: ComponentFixture<BannerEnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerEnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
