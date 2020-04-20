import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CircleIconComponent } from './components/circle-icon/circle-icon.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { RadioGroupComponent } from './components/radio-group/radio-group.component';
import { RadioButtonComponent } from './components/radio-group/radio-button/radio-button.component';
import { SelectComponent } from './components/select/select.component';
import { RadioGroupSmallComponent } from './components/radio-group-small/radio-group-small.component';
import { RadioButtonSmallComponent } from './components/radio-group-small/radio-button-small/radio-button-small.component';
import { InputComponent } from './components/input/input.component';

@NgModule({
  declarations: [
    CircleIconComponent,
    SearchBarComponent,
    RadioGroupComponent,
    RadioButtonComponent,
    SelectComponent,
    RadioGroupSmallComponent,
    RadioButtonSmallComponent,
    InputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CircleIconComponent,
    SearchBarComponent,
    RadioGroupComponent,
    RadioButtonComponent,
    SelectComponent,
    RadioGroupSmallComponent,
    InputComponent
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
