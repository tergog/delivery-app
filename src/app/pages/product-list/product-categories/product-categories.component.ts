import { Component, Input, OnInit } from '@angular/core';

import { ProductCategoryModel } from '../models/product-category.model';
import { productCategories } from '../data/categories.data';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.scss']
})
export class ProductCategoriesComponent implements OnInit {

  public productCategories: ProductCategoryModel[] = productCategories;
  @Input() public visibleCategory: number;

  constructor() { }

  ngOnInit() {
  }

}
