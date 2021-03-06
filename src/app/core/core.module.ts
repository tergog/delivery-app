import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ShoppingCartComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ShoppingCartComponent
  ],
  entryComponents: [
    HeaderComponent,
    FooterComponent,
    ShoppingCartComponent
  ]
})

export class CoreModule { }
