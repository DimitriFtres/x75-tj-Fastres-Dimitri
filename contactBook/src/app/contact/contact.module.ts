import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactHomePageComponent } from './contact-home-page/contact-home-page.component';
import { RouterComponent } from './router/router.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import {ContactRoutingModule} from "./contact.routing.module";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ContactHomePageComponent,
    RouterComponent,
    ContactListComponent,
    ContactFormComponent
  ],
    imports: [
        CommonModule,
        ContactRoutingModule,
        ReactiveFormsModule
    ]
})
export class ContactModule { }
