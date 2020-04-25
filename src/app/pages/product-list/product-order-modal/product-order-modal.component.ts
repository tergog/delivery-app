import {  Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ProductModel } from '../models/product.model';

@Component({
  selector: 'app-product-order-modal',
  templateUrl: './product-order-modal.component.html',
  styleUrls: ['./product-order-modal.component.scss']
})
export class ProductOrderModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { product: ProductModel }) { }

  ngOnInit(): void {
  }

}
