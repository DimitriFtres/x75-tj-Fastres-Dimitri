import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ContactHomeComponent} from "./component/contact-home/contact-home.component";
import {ContactModifyComponent} from "@contact/component/contact-modify/contact-modify.component";
import {ListContactComponent} from "@contact/component/list/list-contact.component";
import {AddContactComponent} from "@contact/component/add/add-contact.component";

let routes:Routes = [
  {
    path: "",
    component: ContactHomeComponent,
    pathMatch: "full"
  },
  {
    path: "home",
    redirectTo: "",
    pathMatch: "full"
  },
  {
    path: "modify/:id",
    component: ContactModifyComponent,
    pathMatch: "full"
  },
  {
    path: "list",
    component: ListContactComponent,
    pathMatch: "full"
  },
  {
    path: "add",
    component: AddContactComponent,
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
export class ContactRoutingModule { }
