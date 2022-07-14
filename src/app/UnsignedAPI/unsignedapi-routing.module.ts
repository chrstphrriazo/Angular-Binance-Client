import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { DepthComponent } from "./Depth/depth.component";
import { PingComponent } from "./Ping/ping.component";
import { TickerPriceComponent } from "./TickerPrice/tickerprice.component";
import { UnsignedApiComponent } from "./unsignedapi.component";

const route: Routes = [
  { path: 'ticker/price', component: TickerPriceComponent },
  { path: 'ping', component: PingComponent },
  { path: 'depth', component: DepthComponent },
  { path: 'unsigned-api', component: UnsignedApiComponent }
]


@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class UnsignedApiRoutingModule {

}
