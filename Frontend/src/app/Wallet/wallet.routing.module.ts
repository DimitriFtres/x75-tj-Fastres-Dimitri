import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {WalletHomeComponent} from "./component/wallet-home/wallet-home.component";
import {RouterComponent} from "../../../../MyFirstApp/src/app/dashboard/router/router.component";

let routes:Routes = [
  {
    path: "",
    redirectTo: "home"
  },
  {
    path: "home",
    component: WalletHomeComponent
  }
];

@NgModule({
  declarations: []
  ,
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RouterModule
  ]
})
export class WalletRoutingModule { }
