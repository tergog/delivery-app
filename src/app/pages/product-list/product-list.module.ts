import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InViewportModule } from '@thisissoon/angular-inviewport';

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
    RouterModule.forChild(routes),
    InViewportModule
  ],
  providers: [
    CategoryPipe
  ]
})
export class ProductListModule { }
