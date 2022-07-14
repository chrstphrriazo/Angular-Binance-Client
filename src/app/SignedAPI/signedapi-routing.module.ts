import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { AccountComponent } from "./Account/account.component";
import { AllOrdersComponent } from "./AllOrders/allorders.component";
import { RateLimitOrderComponent } from "./RateLimitOrder/ratelimit-order.component";


const route: Routes = [
  { path: 'account', component: AccountComponent },
  { path: 'allorders', component: AllOrdersComponent },
  { path: 'ratelimit/order', component: RateLimitOrderComponent }
]


@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class SignedApiRoutingModule {

}
