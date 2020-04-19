import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import { TakeawayComponent } from './takeaway.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes = [
  {
    path: '',
    component: TakeawayComponent
  }
];

@NgModule({
  declarations: [
    TakeawayComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule
  ]
})
export class TakeawayModule { }
