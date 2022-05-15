import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DocumentsHomeComponent} from "./component/documents-home/documents-home.component";
import {RouterComponent} from "../../../../../../MyFirstApp/src/app/dashboard/router/router.component";
import {ModifyDocumentComponent} from "@documents/component/modify-document/modify-document.component";

let routes:Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"

  },
  {
    path: "home",
    component: DocumentsHomeComponent,
    pathMatch: "full"
  },
  {
    path: "modify/:id",
    component: ModifyDocumentComponent,
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
export class DocumentsRoutingModule { }
