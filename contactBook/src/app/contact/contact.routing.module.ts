import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterComponent } from './router/router.component';
import {RouterModule, Routes} from "@angular/router";
import {ContactListComponent} from "./contact-list/contact-list.component";
import {ContactFormComponent} from "./contact-form/contact-form.component";
import {ContactHomePageComponent} from "./contact-home-page/contact-home-page.component";

const routes: Routes = [
  {
    path: '',
    component: RouterComponent,
    children:[
      {
        path: '',
        component: ContactHomePageComponent,
        children: [
          {
            path: '',
            component: ContactListComponent,
          },
          {
            path: '',
            component: ContactFormComponent
          }
        ]
      }
    ]
  }
]

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
