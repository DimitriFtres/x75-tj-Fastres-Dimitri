import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactDetailLineComponent } from './contact-detail-line/contact-detail-line.component';
import {ContactDetailRoutingModule} from "./contact-detail.routing.module";
import {ContactDetailHomePageComponent} from "./contact-detail-home-page/contact-detail-home-page.component";


@NgModule({
  declarations: [
    ContactDetailLineComponent,
    ContactDetailHomePageComponent
  ],
  imports: [
    CommonModule,
    ContactDetailRoutingModule
  ]
})
export class ContactDetailModule { }
