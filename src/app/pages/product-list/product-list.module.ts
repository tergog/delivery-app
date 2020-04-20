import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { TakeawayComponent } from '../takeaway/takeaway.component';

const routes = [
  {
    path: '',
    component: TakeawayComponent
  }
];

@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ProductListModule { }
