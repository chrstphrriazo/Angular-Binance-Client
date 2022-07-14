import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignedApiModule } from './SignedAPI/signedapi.module';
import { UnsignedApiModule } from './UnsignedAPI/unsignedapi.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SignedApiModule,
    UnsignedApiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
