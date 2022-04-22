import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {OrgEmplHomeComponent} from "@org-empl/component";
import {ListOrgEmplComponent} from "@org-empl/component/list/list-org-empl.component";
import {AddOrgEmplComponent} from "@org-empl/component/add/add-org-empl.component";
import {OrgEmplModifyComponent} from "@org-empl/component/org-empl-modify/org-empl-modify.component";
import {OrgEmplModifyOrganizationComponent} from "@org-empl/component/org-empl-modify-organization/org-empl-modify-organization.component";
import {OrgEmplModifyEmployeeComponent} from "@org-empl/component/org-empl-modify-employee/org-empl-modify-employee.component";

let routes:Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"

  },
  {
    path: "home",
    component: OrgEmplHomeComponent,
    pathMatch: "full"

  },
  {
    path: "list",
    component: ListOrgEmplComponent,
    pathMatch: "full"

  },
  {
    path: "address/modify/:id",
    component: OrgEmplModifyComponent,
    pathMatch: "full"

  },
  {
    path: "organization/modify/:id",
    component: OrgEmplModifyOrganizationComponent,
    pathMatch: "full"

  },
  {
    path: "employee/modify/:id",
    component: OrgEmplModifyEmployeeComponent,
    pathMatch: "full"

  },
  {
    path: "add",
    component: AddOrgEmplComponent,
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
export class OrgEmplRoutingModule { }
