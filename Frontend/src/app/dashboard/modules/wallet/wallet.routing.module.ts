import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {WalletHomeComponent} from "./component/wallet-home/wallet-home.component";

let routes:Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "prefix"

  },
  {
    path: "home",
    component: WalletHomeComponent,
    pathMatch: "full"

  }
];

@NgModule({
  declarations: []
  ,
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class WalletRoutingModule { }
