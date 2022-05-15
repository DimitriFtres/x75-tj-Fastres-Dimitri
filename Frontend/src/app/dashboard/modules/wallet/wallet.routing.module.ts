import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {WalletHomeComponent} from "@wallet/component";
import {ModifyWalletComponent} from "@wallet/component/modify-wallet/modify-wallet.component";
import {ModifySalaryComponent} from "@wallet/component/modify-salary/modify-salary.component";
import {ModifyTransactionComponent} from "@wallet/component/modify-transaction/modify-transaction.component";

let routes:Routes = [
  {
    path: "",
    component: WalletHomeComponent,
    pathMatch: "full"

  },
  {
    path: "home",
    redirectTo: "",
    pathMatch: "full"
  },
  {
    path: "modify/wallet/:id",
    component: ModifyWalletComponent,
    pathMatch: "full"
  },
  {
    path: "modify/salary/:id",
    component: ModifySalaryComponent,
    pathMatch: "full"
  },
  {
    path: "modify/transaction/:id",
    component: ModifyTransactionComponent,
    pathMatch: "full"
  },
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
export class WalletRoutingModule { }
