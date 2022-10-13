import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdddataComponent } from './adddata/adddata.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewdataComponent } from './viewdata/viewdata.component';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

const appRoutes:Routes=[
  {
    path:"",component:AdddataComponent
  },
  {
    path:"view",component:ViewdataComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AdddataComponent,
    NavbarComponent,
    ViewdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
