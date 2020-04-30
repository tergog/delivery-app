import { Component, OnInit } from '@angular/core';

import { products } from '../../product-list/data/products.data';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.scss']
})
export class OrderConfirmationComponent implements OnInit {

  public products = products;
  constructor() { }

  ngOnInit(): void {
  }

}
