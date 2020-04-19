import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { OrderTypeComponent } from './order-type.component';
import { CardComponent } from './card/card.component';

const routes = [
  {
    path: '',
    component: OrderTypeComponent
  }
];

@NgModule({
  declarations: [
    OrderTypeComponent,
    CardComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class OrderTypeModule { }
