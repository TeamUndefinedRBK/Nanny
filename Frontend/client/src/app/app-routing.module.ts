import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NannyProfileComponent } from './nanny-profile/nanny-profile.component';
import { NannyFormComponent } from './nanny-form/nanny-form.component';

const routes: Routes = [
  {
    path: 'nannys',
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
  // {
  //   path: 'profile',
  //   component: NannyProfileComponent,
  // },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [NannyFormComponent]
