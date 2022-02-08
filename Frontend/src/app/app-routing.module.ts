import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthHomeComponent} from "./Auth/component/auth-home/auth-home.component";

const routes: Routes = [
  {
    path: "",
    component: AuthHomeComponent,
    pathMatch: "full"
  },
  {
    path: "auth",
    loadChildren: () => import("./Auth/auth.routing.module").then(m => m.AuthRoutingModule),

  },
  {
    path: "contact",
    loadChildren: () => import("./Contact/contact.routing.module").then(m => m.ContactRoutingModule),

  },
  {
    path: "documents",
    loadChildren: () => import("./Documents/documents.routing.module").then(m => m.DocumentsRoutingModule),

  },
  {
    path: "org-empl",
    loadChildren: () => import("./org-empl/org-empl.routing.module").then(m => m.OrgEmplRoutingModule),

  },
  {
    path: "wallet",
    loadChildren: () => import("./Wallet/wallet.routing.module").then(m => m.WalletRoutingModule),

  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }