import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatStepperModule } from '@angular/material/stepper';

import { CircleIconComponent } from './components/circle-icon/circle-icon.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { RadioGroupComponent } from './components/radio-group/radio-group.component';
import { RadioButtonComponent } from './components/radio-group/radio-button/radio-button.component';
import { SelectComponent } from './components/select/select.component';
import { RadioGroupSmallComponent } from './components/radio-group-small/radio-group-small.component';
import { RadioButtonSmallComponent } from './components/radio-group-small/radio-button-small/radio-button-small.component';
import { InputComponent } from './components/input/input.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { SlideToggleComponent } from './components/slide-toggle/slide-toggle.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';

@NgModule({
  declarations: [
    CircleIconComponent,
    SearchBarComponent,
    RadioGroupComponent,
    RadioButtonComponent,
    SelectComponent,
    RadioGroupSmallComponent,
    RadioButtonSmallComponent,
    InputComponent,
    TextareaComponent,
    SlideToggleComponent,
    StepperComponent,
    CheckboxComponent
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatStepperModule
  ],
  exports: [
    CircleIconComponent,
    SearchBarComponent,
    RadioGroupComponent,
    RadioButtonComponent,
    SelectComponent,
    RadioGroupSmallComponent,
    InputComponent,
    TextareaComponent,
    SlideToggleComponent,
    StepperComponent,
    CheckboxComponent
  ],
  entryComponents: [
    CircleIconComponent,
    SearchBarComponent,
    RadioGroupComponent,
    RadioButtonComponent,
    SelectComponent
  ]
})

export class SharedModule { }
