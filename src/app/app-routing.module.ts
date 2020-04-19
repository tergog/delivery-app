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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
