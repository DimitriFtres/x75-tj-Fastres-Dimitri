import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {InfoPageComponent} from "./info-page/info-page.component";
import {ContactPageComponent} from "../contact-page/contact-page.component";

const routes: Routes =[
  {
    path: 'infoPage',
    component: InfoPageComponent,
    pathMatch: 'prefix'
  },
  {
    path: 'contactPage',
    component: ContactPageComponent,
    pathMatch: 'prefix'
  },
  ]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class InfoModuleModule {}
