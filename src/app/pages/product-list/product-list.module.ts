import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductCategoriesComponent } from './product-categories/product-categories.component';
import { CategoryPipe } from './pipes/category.pipe';

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
    CategoryPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    CategoryPipe
  ]
})
export class ProductListModule { }
