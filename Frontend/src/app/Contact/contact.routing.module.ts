import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ContactHomeComponent} from "./component/contact-home/contact-home.component";

let routes:Routes = [
  {
    path: "",
    redirectTo: "home"
  },
  {
    path: "home",
    component: ContactHomeComponent
  }
];

@NgModule({
  declarations: []
  ,
  imports: [
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class ContactRoutingModule { }
