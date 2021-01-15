import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  NannyFormComponent} from './nanny-form/nanny-form.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'Apply', component: NannyFormComponent},
  {path: 'Signup', component: SignupComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule ]
})
export class AppRoutingModule { }
export const routingComponents = [NannyFormComponent, SignupComponent]
