import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndusspayFrontPageComponent } from './indusspay-front-page.component';

describe('IndusspayFrontPageComponent', () => {
  let component: IndusspayFrontPageComponent;
  let fixture: ComponentFixture<IndusspayFrontPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndusspayFrontPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndusspayFrontPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
