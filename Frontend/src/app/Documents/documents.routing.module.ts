import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DocumentsHomeComponent} from "./component/documents-home/documents-home.component";
import {RouterComponent} from "../../../../MyFirstApp/src/app/dashboard/router/router.component";

let routes:Routes = [
  {
    path: "",
    redirectTo: "home"
  },
  {
    path: "home",
    component: DocumentsHomeComponent
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
export class DocumentsRoutingModule { }
