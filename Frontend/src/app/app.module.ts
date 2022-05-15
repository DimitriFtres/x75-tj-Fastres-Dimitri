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
import { AccountDirective } from './directive/account/account.directive';
import {OrgEmplModifyComponent} from "@org-empl/component/org-empl-modify/org-empl-modify.component";
import {OrgEmplModifyOrganizationComponent} from "@org-empl/component/org-empl-modify-organization/org-empl-modify-organization.component";
import {OrgEmplModifyEmployeeComponent} from "@org-empl/component/org-empl-modify-employee/org-empl-modify-employee.component";
import {DisplayAddressesComponent} from "@shared/display-addresses/display-addresses.component";
import {SignupComponent} from "./public/signup/component/signup.component";
import {ListWalletComponent} from "@wallet/component/list-wallet/list-wallet.component";
import {AddWalletComponent} from "@wallet/component/add-wallet/add-wallet.component";
import {ModifyWalletComponent} from "@wallet/component/modify-wallet/modify-wallet.component";
import {WalletHomeComponent} from "@wallet/component";
import {ModifyDocumentComponent} from "@documents/component/modify-document/modify-document.component";
import {ModifyTransactionComponent} from "@wallet/component/modify-transaction/modify-transaction.component";
import {ModifySalaryComponent} from "@wallet/component/modify-salary/modify-salary.component";
import { WalletDirective } from './directive/wallet/wallet.directive';



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
        AccountDirective,
        OrgEmplModifyComponent,
        OrgEmplModifyOrganizationComponent,
        OrgEmplModifyEmployeeComponent,
        DisplayAddressesComponent,
        SignupComponent,
        ListWalletComponent,
        AddWalletComponent,
        ModifyWalletComponent,
        WalletHomeComponent,
        ModifyDocumentComponent,
        ModifyTransactionComponent,
        ModifySalaryComponent,
        WalletDirective
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
    ListWalletComponent,
  ],
    bootstrap: [AppComponent],
})
export class AppModule { }
