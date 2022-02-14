import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {DashboardRoutingModule} from "./dashboard.routing.module";
import {HomeComponent} from "./home/home.component";
import {MyDetailComponent} from "./my-detail/my-detail.component";
import {RouterComponent} from "./router/router.component";


@NgModule({
  declarations: [
    HomeComponent,
    MyDetailComponent,
    RouterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule,

  ]
})
export class DashboardModule { }
