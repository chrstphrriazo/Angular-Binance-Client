import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AccountModule } from "./Account/account.module";
import { AllOrdersModule } from "./AllOrders/allorders.module";
import { RateLimitOrderModule } from "./RateLimitOrder/ratelimit-order.module";
import { SignedApiRoutingModule } from "./signedapi-routing.module";
import { SignedApiComponent } from "./signedapi.component";

@NgModule({
  declarations: [SignedApiComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AccountModule,
    AllOrdersModule,
    RateLimitOrderModule,
    SignedApiRoutingModule
  ],
  exports: [SignedApiComponent],
  providers: []
})
export class SignedApiModule {

}
