import { Component, OnInit } from '@angular/core';

import { ProductModel } from './models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public products: ProductModel[] = [
    {
      id: 1,
      image: 'assets/images/garlic-prawn.png',
      title: 'פיצה משפחתית טבעונית L',
      description1: 'פיצה משפחתית טבעונית',
      description2: '+ תוספת + מאפה זיוה',
      price: 40,
      specification: ['vegetarian', 'spicy']
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
