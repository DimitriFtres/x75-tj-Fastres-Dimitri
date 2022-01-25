import {RouterModule, Routes} from "@angular/router";
import {RouterComponent} from "./router/router.component";
import {HomeComponent} from "./home/home.component";
import {MyDetailComponent} from "./my-detail/my-detail.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

let routes:Routes = [
  {
    path: "",
    component: RouterComponent,
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
export class DashboardRoutingModule { }
