import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InViewportModule } from '@thisissoon/angular-inviewport';
import { MatDialogModule } from '@angular/material/dialog';

import { ProductListComponent } from './product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductCategoriesComponent } from './product-categories/product-categories.component';
import { CategoryPipe } from './pipes/category.pipe';
import { ProductOrderModalComponent } from './product-order-modal/product-order-modal.component';
import { SharedModule } from '../../shared/shared.module';
import { ProductOptionsComponent } from './product-order-modal/product-options/product-options.component';


const routes = [
  {
    path: '',
    component: ProductListComponent
  }
];

@NgModule({
  declarations: [
    ProductListComponent,
    ProductCardComponent,
    ProductCategoriesComponent,
    CategoryPipe,
    ProductOrderModalComponent,
    ProductOptionsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    InViewportModule,
    MatDialogModule,
    SharedModule
  ],
  providers: [
    CategoryPipe
  ]
})
export class ProductListModule { }
