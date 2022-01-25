import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterComponent } from './router/router.component';
import { HomeComponent } from './home/home.component';
import { MyDetailComponent } from './my-detail/my-detail.component';


@NgModule({
  declarations: [
    RouterComponent,
    HomeComponent,
    MyDetailComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class DashboardModule { }
