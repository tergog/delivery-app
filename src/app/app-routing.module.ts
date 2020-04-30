import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'order-type',
    loadChildren: () => import('./pages/order-type/order-type.module').then(m => m.OrderTypeModule)
  },
  {
    path: 'takeaway',
    loadChildren: () => import('./pages/takeaway/takeaway.module').then(m => m.TakeawayModule)
  },
  {
    path: 'product-list',
    loadChildren: () => import('./pages/product-list/product-list.module').then(m => m.ProductListModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./pages/checkout/checkout.module').then(m => m.CheckoutModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
