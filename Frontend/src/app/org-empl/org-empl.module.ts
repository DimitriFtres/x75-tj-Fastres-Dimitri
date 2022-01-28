import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrgEmplRoutingModule} from "./org-empl.routing.module";
import {OrgEmplHomeComponent} from "./component/org-empl-home/org-empl-home.component";



@NgModule({
  declarations: [
    OrgEmplHomeComponent
  ],
  imports: [
    CommonModule,
    OrgEmplRoutingModule
  ]
})
export class OrgEmplModule { }
