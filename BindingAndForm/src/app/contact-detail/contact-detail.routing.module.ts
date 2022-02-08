import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ContactDetailLineComponent} from "./contact-detail-line/contact-detail-line.component";
import {ContactDetailHomePageComponent} from "./contact-detail-home-page/contact-detail-home-page.component";
import {BoutonComponent} from "./bouton/bouton.component";
import {ContactFormComponent} from "./contact-form/contact-form.component";

let routes:Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "prefix"
  },
  {
    path: "home",
    component: ContactDetailHomePageComponent,
    pathMatch: "full"
  },
  {
    path: "bouton",
    component: BoutonComponent,
    pathMatch: "prefix"
  },
  {
    path: "form",
    component: ContactFormComponent,
    pathMatch: "prefix"
  },
  {
    path: "line/:id",
    component: ContactDetailLineComponent,
    pathMatch: "prefix"
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactDetailRoutingModule { }
