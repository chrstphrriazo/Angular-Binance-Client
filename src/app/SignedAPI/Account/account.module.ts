import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { SignedApiService } from "../../Services/signedapi.service";
import { AccountComponent } from "./account.component";

@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [AccountComponent],
  providers: [SignedApiService]
})
export class AccountModule {

}
