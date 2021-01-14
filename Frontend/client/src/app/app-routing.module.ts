import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  NannyFormComponent} from './nanny-form/nanny-form.component'
const routes: Routes = [
  {path:'apply', component: NannyFormComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule ]
})
export class AppRoutingModule { }
