import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NannyFormComponent } from './nanny-form/nanny-form.component';
import { FormsModule } from '@angular/forms';
import { NannyProfileComponent } from '../app/nanny-profile/nanny-profile.component';

@NgModule({
  declarations: [AppComponent, NannyFormComponent, NannyProfileComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
