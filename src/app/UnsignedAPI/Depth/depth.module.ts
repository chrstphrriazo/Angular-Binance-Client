import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { UnsignedApiService } from "../../Services/unsignedapi.service";
import { DepthComponent } from "./depth.component";

@NgModule({
  declarations: [DepthComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [DepthComponent],
  providers: [UnsignedApiService]
})
export class DepthModule {

}
