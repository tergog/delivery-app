import { Component, OnInit } from '@angular/core';

import { products } from '../../product-list/data/products.data';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.scss']
})
export class OrderConfirmationComponent implements OnInit {

  public products = products;

  public shoppingItems = [
    {
      id: 1,
      description: 'טבעוני פריך לבחירה פיצה משפחתית טבעונית + תוספת + מאפה זיוה',
      oldPrice: 85,
      newPrice: 59,
      quantity: 2
    },
    {
      id: 2,
      description: 'תופסות + L תינועבט תיתחפשמ הציפ',
      oldPrice: '',
      newPrice: 40,
      quantity: 15
    },
    {
      id: 3,
      description: 'טבעוני פריך לבחירה פיצה משפחתית טבעונית + תוספת + מאפה זיוה',
      oldPrice: 85,
      newPrice: 59,
      quantity: 2
    },
    {
      id: 4,
      description: 'תופסות + L תינועבט תיתחפשמ הציפ',
      oldPrice: '',
      newPrice: 40,
      quantity: 15
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
