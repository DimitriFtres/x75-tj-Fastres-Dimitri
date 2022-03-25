import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DocumentsHomeComponent} from "@documents/component";
import {ContactHomeComponent} from "@contact/component";
import {AuthHomeComponent} from "@auth/component";

import { HeaderComponent } from '@shared/header/header/header.component';
import {ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { ListContactComponent } from '@contact/component/list/list-contact.component';
import { AddContactComponent } from '@contact/component/add/add-contact.component';
import {ListDocumentComponent} from "@documents/component/list/list-document.component";
import {AddDocumentComponent} from "@documents/component/add/add-document.component";
import { SubHeaderComponent } from './shared/sub-header/sub-header.component';
import {AddOrgEmplComponent} from "@org-empl/component/add/add-org-empl.component";
import {ListOrgEmplComponent} from "@org-empl/component/list/list-org-empl.component";
import {OrgEmplHomeComponent} from "@org-empl/component";



@NgModule({
    declarations: [
        AppComponent,
        DocumentsHomeComponent,
        ContactHomeComponent,
        AuthHomeComponent,
        HeaderComponent,
        ListContactComponent,
        AddContactComponent,
        ListDocumentComponent,
        AddDocumentComponent,
        SubHeaderComponent,
        AddOrgEmplComponent,
        ListOrgEmplComponent,
        OrgEmplHomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
    providers: [],
  exports: [
    ContactHomeComponent,
    ListOrgEmplComponent,
    AddOrgEmplComponent
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }
