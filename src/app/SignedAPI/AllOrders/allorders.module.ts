import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { SignedApiService } from "../../Services/signedapi.service";
import { AllOrdersComponent } from "./allorders.component";

@NgModule({
  declarations: [AllOrdersComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [AllOrdersComponent],
  providers: [SignedApiService]
})
export class AllOrdersModule {

}
