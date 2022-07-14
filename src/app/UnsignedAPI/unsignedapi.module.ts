import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "../app-routing.module";
import { DepthComponent } from "./Depth/depth.component";
import { DepthModule } from "./Depth/depth.module";
import { PingModule } from "./Ping/ping.module";
import { TickerPriceModule } from "./TickerPrice/tickerprice.module";
import { UnsignedApiRoutingModule } from "./unsignedapi-routing.module";
import { UnsignedApiComponent } from "./unsignedapi.component";

@NgModule({
  declarations: [
    UnsignedApiComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    UnsignedApiRoutingModule,
    TickerPriceModule,
    DepthModule,
    PingModule
  ],
  exports: [UnsignedApiComponent],
  providers: []
})

export class UnsignedApiModule {

}
