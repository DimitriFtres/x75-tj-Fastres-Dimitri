import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {InfoPageComponent} from "./info-page/info-page.component";
import {ContactPageComponent} from "../contact-page/contact-page.component";

const routes: Routes =[
  {
    path: 'infoPage',
    component: InfoPageComponent,
  },
  {
    path: 'contactPage',
    component: ContactPageComponent,
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
