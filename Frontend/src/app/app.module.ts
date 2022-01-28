import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {WalletHomeComponent} from "./Wallet/component/wallet-home/wallet-home.component";
import {DocumentsHomeComponent} from "./Documents/component/documents-home/documents-home.component";
import {ContactHomeComponent} from "./Contact/component/contact-home/contact-home.component";
import {OrgEmplHomeComponent} from "./org-empl/component/org-empl-home/org-empl-home.component";
import {AuthHomeComponent} from "./Auth/component/auth-home/auth-home.component";
import {WalletRoutingModule} from "./Wallet/wallet.routing.module";
import {OrgEmplRoutingModule} from "./org-empl/org-empl.routing.module";
import {DocumentsRoutingModule} from "./Documents/documents.routing.module";
import {ContactRoutingModule} from "./Contact/contact.routing.module";
import {AuthRoutingModule} from "./Auth/auth.routing.module";



@NgModule({
  declarations: [
    AppComponent,
    WalletHomeComponent,
    OrgEmplHomeComponent,
    DocumentsHomeComponent,
    ContactHomeComponent,
    AuthHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WalletRoutingModule,
    OrgEmplRoutingModule,
    DocumentsRoutingModule,
    ContactRoutingModule,
    AuthRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
