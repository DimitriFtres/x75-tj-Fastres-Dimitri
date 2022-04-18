import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DocumentsHomeComponent} from "@documents/component";
import {ContactHomeComponent} from "@contact/component";
import {AuthHomeComponent} from "@auth/component";

import { HeaderComponent } from '@shared/header/header/header.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ListContactComponent } from '@contact/component/list/list-contact.component';
import { AddContactComponent } from '@contact/component/add/add-contact.component';
import {ListDocumentComponent} from "@documents/component/list/list-document.component";
import {AddDocumentComponent} from "@documents/component/add/add-document.component";
import {AddOrgEmplComponent} from "@org-empl/component/add/add-org-empl.component";
import {ListOrgEmplComponent} from "@org-empl/component/list/list-org-empl.component";
import {OrgEmplHomeComponent} from "@org-empl/component";
import {HttpInterceptorService} from "@shared/service";
import { DeleteButtonComponent } from './shared/buttons/delete-button/delete-button.component';
import { SubHeaderComponent } from './shared/header/sub-header/sub-header.component';
import { AddresseDirective } from './directive/addresse/addresse.directive';
import {ContactModifyComponent} from "@contact/component/contact-modify/contact-modify.component";
import { ModifyUrlDirective } from './directive/modifyUrl/modify-url.directive';
import { EmployeeDirective } from './directive/employee/employee.directive';
import { OrganizationDirective } from './directive/organization/organization.directive';
import { TransactionDirective } from './directive/transaction/transaction.directive';



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
        AddOrgEmplComponent,
        ListOrgEmplComponent,
        OrgEmplHomeComponent,
        DeleteButtonComponent,
        SubHeaderComponent,
        AddresseDirective,
        ContactModifyComponent,
        ModifyUrlDirective,
        EmployeeDirective,
        OrganizationDirective,
        TransactionDirective,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
    providers: [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpInterceptorService,
        multi: true,
      }
    ],
  exports: [
    ContactHomeComponent,
    ListOrgEmplComponent,
    AddOrgEmplComponent,
  ],
    bootstrap: [AppComponent],
})
export class AppModule { }
