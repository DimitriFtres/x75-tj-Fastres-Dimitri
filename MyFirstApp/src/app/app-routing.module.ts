import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'info',
    loadChildren: () => import('./info-module/info-module.module').then(n => n.InfoModuleModule)
  },
  {
    path: "dashboard",
    loadChildren: () => import('./dashboard/dashboard.module').then(m=>m.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    RouterModule,
  ],
  exports: [RouterModule,]
})
export class AppRoutingModule { }
