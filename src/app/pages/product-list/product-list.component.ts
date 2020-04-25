import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { first } from 'rxjs/operators';

import { ProductModel } from './models/product.model';
import { ProductCategoryModel } from './models/product-category.model';
import { productCategories } from './data/categories.data';
import { products } from './data/products.data';
import { ProductOrderModalComponent } from './product-order-modal/product-order-modal.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public productCategories: ProductCategoryModel[] = productCategories;
  public products: ProductModel[] = products;
  public visibleCategory: number;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }

  public inViewport(isInViewport: boolean, category: ProductCategoryModel): void {
    if (isInViewport) {
      this.visibleCategory = category.id;
    }
  }

  public openProductModal(product: ProductModel): void {
    const dialogRef = this.dialog.open(ProductOrderModalComponent, {
      width: '1198px',
      height: '100%',
      data: { product }
    });

    dialogRef.afterClosed()
      .pipe(first())
      .subscribe(result => {
        console.log(result);
      });
  }
}
