import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AuthHomeComponent} from "./component/auth-home/auth-home.component";

let routes:Routes = [
  {
    path: "",
    redirectTo: "home"
  },
  {
    path: "home",
    component: AuthHomeComponent
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
export class AuthRoutingModule { }
