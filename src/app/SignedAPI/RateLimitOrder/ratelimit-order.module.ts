import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { SignedApiService } from "../../Services/signedapi.service";
import { RateLimitOrderComponent } from "./ratelimit-order.component";

@NgModule({
  declarations: [RateLimitOrderComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [RateLimitOrderComponent],
  providers: [SignedApiService]
})
export class RateLimitOrderModule {

}
