import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignedApiComponent } from './SignedAPI/signedapi.component';
import { UnsignedApiComponent } from './UnsignedAPI/unsignedapi.component';

const routes: Routes = [
  { path: '*', redirectTo: '', pathMatch: 'full' },
  { path: 'unsigned-api', component: UnsignedApiComponent},
  { path: 'signed-api', component: SignedApiComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
