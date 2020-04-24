import { Component, OnInit } from '@angular/core';

import { ProductModel } from './models/product.model';
import { ProductCategoryModel } from './models/product-category.model';
import { productCategories } from './data/categories.data';
import { products } from './data/products.data';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public productCategories: ProductCategoryModel[] = productCategories;
  public products: ProductModel[] = products;
  public visibleCategory: number;

  constructor() { }

  ngOnInit() {
  }

  public inViewport(isInViewport: boolean, category: ProductCategoryModel): void {
    if (isInViewport) {
      this.visibleCategory = category.id;
    }
  }
}
