import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthHomeComponent} from './security/auth/component';

const routes: Routes = [
  {
    path: '',
    component: AuthHomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./security/auth/auth.routing.module').then(m => m.AuthRoutingModule),

  },
  {
    path: 'contact',
    loadChildren: () => import('./dashboard/modules/Contact/contact.routing.module').then(m => m.ContactRoutingModule),

  },
  {
    path: 'documents',
    loadChildren: () => import('./dashboard/modules/Documents/documents.routing.module').then(m => m.DocumentsRoutingModule),

  },
  {
    path: 'org-empl',
    loadChildren: () => import('./dashboard/modules/org-empl/org-empl.routing.module').then(m => m.OrgEmplRoutingModule),

  },
  {
    path: 'wallet',
    loadChildren: () => import('./dashboard/modules/Wallet/wallet.module').then(m => m.WalletModule),

  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
