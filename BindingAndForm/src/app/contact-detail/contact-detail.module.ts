import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactDetailLineComponent } from './contact-detail-line/contact-detail-line.component';
import {ContactDetailRoutingModule} from "./contact-detail.routing.module";


@NgModule({
  declarations: [
    ContactDetailLineComponent
  ],
  imports: [
    CommonModule,
    ContactDetailRoutingModule
  ]
})
export class ContactDetailModule { }
