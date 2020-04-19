import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CircleIconComponent } from './components/circle-icon/circle-icon.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { RadioGroupComponent } from './components/radio-group/radio-group.component';
import { RadioButtonComponent } from './components/radio-group/radio-button/radio-button.component';

@NgModule({
  declarations: [
    CircleIconComponent,
    SearchBarComponent,
    RadioGroupComponent,
    RadioButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CircleIconComponent,
    SearchBarComponent,
    RadioGroupComponent,
    RadioButtonComponent
  ],
  entryComponents: [
    CircleIconComponent,
    SearchBarComponent,
    RadioGroupComponent,
    RadioButtonComponent
  ]
})

export class SharedModule { }
