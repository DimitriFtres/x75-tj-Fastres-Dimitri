import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {OrgEmplHomeComponent} from "./component/org-empl-home/org-empl-home.component";
import {RouterComponent} from "../../../../MyFirstApp/src/app/dashboard/router/router.component";

let routes:Routes = [
  {
    path: "",
    redirectTo: "home"
  },
  {
    path: "home",
    component: OrgEmplHomeComponent
  }
];

@NgModule({
  declarations: []
  ,
  imports: [
    CommonModule,
  ],
  exports: [
    RouterModule
  ]
})
export class orgEmplRoutingModule { }
