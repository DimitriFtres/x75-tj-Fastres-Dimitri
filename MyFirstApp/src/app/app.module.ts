import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {InfoModuleModule} from "./info-module/info-module.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InfoModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
