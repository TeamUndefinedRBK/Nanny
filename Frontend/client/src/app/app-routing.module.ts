import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { NannyProfileComponent } from './nanny-profile/nanny-profile.component';
import { NannyFormComponent } from './nanny-form/nanny-form.component';
import { HomeComponent } from './home/home.component';

import { AuthGuard } from './_helpers';

const routes: Routes = [
  {path: 'nannys',
    // component: NannyFormComponent,
    children: [
      {path: 'nanny', component: NannyFormComponent,},
      {path: 'profile',component: NannyProfileComponent,},
    ],},
  {path: 'home',component: HomeComponent,},
  // {
  //   path: 'nannyslist',
  //   component: HomeComponent,
  // },
];

export const AppRoutingModule = RouterModule.forRoot(routes);
