import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NannyFormComponent } from './nanny-form/nanny-form.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component'

@NgModule({
  declarations: [AppComponent,
     NannyFormComponent,
      NavbarComponent, 
      FooterComponent, 
      HomeComponent],

  imports: [BrowserModule,
     AppRoutingModule, 
     FormsModule,
    HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
