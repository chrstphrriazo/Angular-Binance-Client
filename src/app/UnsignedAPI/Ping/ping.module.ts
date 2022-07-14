import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { UnsignedApiService } from "../../Services/unsignedapi.service";
import { UnsignedApiRoutingModule } from "../unsignedapi-routing.module";
import { PingComponent } from "./ping.component";

@NgModule({
  declarations: [PingComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    UnsignedApiRoutingModule
  ],

  exports: [PingComponent],
  providers: [UnsignedApiService]
})

export class PingModule {

}
