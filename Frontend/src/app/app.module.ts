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
import { ListComponent } from './dashboard/modules/contact/component/list/list.component';
import { AddComponent } from './dashboard/modules/contact/component/add/add.component';



@NgModule({
    declarations: [
        AppComponent,
        DocumentsHomeComponent,
        ContactHomeComponent,
        AuthHomeComponent,
        HeaderComponent,
        ListComponent,
        AddComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
    providers: [],
    exports: [
        ContactHomeComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
