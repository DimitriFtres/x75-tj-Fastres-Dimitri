import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {WalletHomeComponent} from "./dashboard/modules/wallet/component/wallet-home/wallet-home.component";
import {DocumentsHomeComponent} from "./dashboard/modules/documents/component/documents-home/documents-home.component";
import {ContactHomeComponent} from "./dashboard/modules/contact/component/contact-home/contact-home.component";
import {OrgEmplHomeComponent} from "./dashboard/modules/org-empl/component/org-empl-home/org-empl-home.component";
import {AuthHomeComponent} from "./security/auth/component/auth-home/auth-home.component";
import {WalletRoutingModule} from "./dashboard/modules/wallet/wallet.routing.module";
import {OrgEmplRoutingModule} from "./dashboard/modules/org-empl/org-empl.routing.module";
import {DocumentsRoutingModule} from "./dashboard/modules/documents/documents.routing.module";
import {ContactRoutingModule} from "./dashboard/modules/contact/contact.routing.module";
import {AuthRoutingModule} from "./security/auth/auth.routing.module";



@NgModule({
    declarations: [
        AppComponent,
        DocumentsHomeComponent,
        ContactHomeComponent,
        AuthHomeComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    exports: [
        ContactHomeComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
