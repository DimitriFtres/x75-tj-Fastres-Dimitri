import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardRoutingModule} from "./dashboard/dashboard.routing.module";

const routes: Routes = [
  {
    path: 'info',
    loadChildren: () => import('./info-module/info-module.module').then(n => n.InfoModuleModule)
  },
  {
    path: "dashboard",
    loadChildren: () => import('./dashboard/dashboard.routing.module').then(m=>m.DashboardRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
