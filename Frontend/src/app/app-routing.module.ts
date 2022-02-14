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
    loadChildren: () => import('./security/auth/auth.module').then(m => m.AuthModule),

  },
  {
    path: 'contact',
    loadChildren: () => import('./dashboard/modules/contact/contact.module').then(m => m.ContactModule),

  },
  {
    path: 'documents',
    loadChildren: () => import('./dashboard/modules/documents/documents.module').then(m => m.DocumentsModule),

  },
  {
    path: 'org-empl',
    loadChildren: () => import('./dashboard/modules/org-empl/org-empl.module').then(m => m.OrgEmplModule),

  },
  {
    path: 'wallet',
    loadChildren: () => import('./dashboard/modules/wallet/wallet.module').then(m => m.WalletModule),

  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
