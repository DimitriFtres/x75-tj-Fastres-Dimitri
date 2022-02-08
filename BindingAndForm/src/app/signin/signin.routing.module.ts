import {RouterModule, Routes, ROUTES} from "@angular/router";
import {SigninComponent} from "./signin/signin.component";
import {NgModule} from "@angular/core";

let routes: Routes = [
  {
    path: "",
    redirectTo: "home"
  },
  {
    path: "home",
    component: SigninComponent,
    pathMatch: "full"
  },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SigninRoutingModule { }
