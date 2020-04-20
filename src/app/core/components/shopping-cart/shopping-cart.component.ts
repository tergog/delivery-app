import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

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

  ngOnInit() {
  }

}
