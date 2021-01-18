import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NannyProfileComponent } from './nanny-profile/nanny-profile.component';
import { NannyFormComponent } from './nanny-form/nanny-form.component';
import { HomeComponent } from './home/home.component';
import {RegisterComponent} from './user/signup/register.component';
import {LoginComponent} from './user/signin/login.component';
import {NannyLComponent} from './nanny-l/nanny-l.component';


const routes: Routes = [
  {
    // path: 'nannys',
    // component: NannyFormComponent,
    children: [
      {
        path: 'nanny',
        component: NannyFormComponent,
      },
      {
        path: 'profile',
        component: NannyProfileComponent,
      },
      
    ], 
 
  },
  {path: 'home', component: HomeComponent},  
  {path:'signup' , component: RegisterComponent},
  {path:'signin',  component: LoginComponent},
  {path:'nannyslist', component: NannyLComponent},
  {path:'home', component:HomeComponent},
  {path: '', component: LoginComponent}
];
export const routingComponents = [NannyLComponent,HomeComponent,NannyFormComponent,RegisterComponent,LoginComponent];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
