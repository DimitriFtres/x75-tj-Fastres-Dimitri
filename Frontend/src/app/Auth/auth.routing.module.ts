import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AuthHomeComponent} from "./component/auth-home/auth-home.component";

let routes:Routes = [
  {
    path: "auth",
    redirectTo: "auth/home",
    pathMatch: "full"

  },
  {
    path: "auth/home",
    component: AuthHomeComponent,
    pathMatch: "full"

  }
];

@NgModule({
  declarations: []
  ,
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
