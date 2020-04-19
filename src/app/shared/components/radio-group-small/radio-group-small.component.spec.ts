import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioGroupSmallComponent } from './radio-group-small.component';

describe('RadioGroupSmallComponent', () => {
  let component: RadioGroupSmallComponent;
  let fixture: ComponentFixture<RadioGroupSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioGroupSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioGroupSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
