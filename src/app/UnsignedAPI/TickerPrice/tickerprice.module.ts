import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { UnsignedApiService } from "../../Services/unsignedapi.service";
import { UnsignedApiRoutingModule } from "../unsignedapi-routing.module";
import { TickerPriceComponent } from "./tickerprice.component";

@NgModule({
  declarations: [
    TickerPriceComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    UnsignedApiRoutingModule
  ],
  exports: [TickerPriceComponent],
  providers: [UnsignedApiService]
})

export class TickerPriceModule {

}
