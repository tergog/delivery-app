import { Component, Input, OnInit } from '@angular/core';

import { ShoppingItemModel } from 'src/app/core/models/shopping-item.model';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.scss']
})
export class ShoppingItemComponent implements OnInit {

  @Input() shoppingItem: ShoppingItemModel;

  constructor() { }

  ngOnInit() {
  }

}
