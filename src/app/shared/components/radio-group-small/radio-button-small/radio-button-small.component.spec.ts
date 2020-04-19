import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonSmallComponent } from './radio-button-small.component';

describe('RadioButtonSmallComponent', () => {
  let component: RadioButtonSmallComponent;
  let fixture: ComponentFixture<RadioButtonSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioButtonSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioButtonSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
