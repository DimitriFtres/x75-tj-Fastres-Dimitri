import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WalletRoutingModule} from "./wallet.routing.module";
import {WalletHomeComponent} from "./component/wallet-home/wallet-home.component";



@NgModule({
  declarations: [
    WalletHomeComponent
  ],
  imports: [
    CommonModule,
    WalletRoutingModule
  ]
})
export class WalletModule { }
