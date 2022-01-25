import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterComponent } from './router/router.component';
import { HomeComponent } from './home/home.component';
import { MyDetailComponent } from './my-detail/my-detail.component';
import {Router, RouterModule, Routes} from "@angular/router";


let routes:Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path:"my-detail/:name/:firstname",
        component: MyDetailComponent
      },
      {
        path: "router",
        component: RouterComponent
      }
    ]

  },

];

@NgModule({
  declarations: [
    RouterComponent,
    HomeComponent,
    MyDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
