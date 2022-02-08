import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ContactDetailRoutingModule} from "./contact-detail/contact-detail.routing.module";
import {SigninRoutingModule} from "./signin/signin.routing.module";
import {CommonModule} from "@angular/common";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home"
  },
  {
    path: "contact",
    loadChildren: () => import("./contact-detail/contact-detail.module").then(m => m.ContactDetailModule),
  },
  {
    path: "sign",
    loadChildren: () => import("./signin/signin.module").then(m => m.SigninModule),
  },
  {
    path: "**",
    redirectTo: "home"
  },
  {
    path: "home",
    pathMatch: "full",
    redirectTo: "contact"
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
