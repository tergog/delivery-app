import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CheckoutComponent } from './checkout.component';
import { SharedModule } from '../../shared/shared.module';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { DeliveryInformationComponent } from './delivery-information/delivery-information.component';
import { BillingInformationComponent } from './billing-information/billing-information.component';
import {CoreModule} from '../../core/core.module';

const routes = [
  {
    path: '',
    component: CheckoutComponent
  }
];

@NgModule({
  declarations: [
    CheckoutComponent,
    OrderConfirmationComponent,
    DeliveryInformationComponent,
    BillingInformationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    CoreModule
  ]
})
export class CheckoutModule { }
