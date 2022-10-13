import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdddataComponent } from './adddata/adddata.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewdataComponent } from './viewdata/viewdata.component';

@NgModule({
  declarations: [
    AppComponent,
    AdddataComponent,
    NavbarComponent,
    ViewdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
