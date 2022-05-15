import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthHomeComponent} from './security/auth/component';
import {PublicGuard, SecurityGuard} from "./security/guard";
import {SignupComponent} from "./public/signup/component/signup.component";

const routes: Routes = [
  {
    path: '',
    redirectTo : 'auth',
    pathMatch: "full"
  },
  {
    path: 'auth',
    loadChildren: () => import('./security/auth/auth.module').then(m => m.AuthModule),
    canActivate: [PublicGuard]

  },
  {
    path: 'contact',
    loadChildren: () => import('./dashboard/modules/contact/contact.module').then(m => m.ContactModule),
    canActivate: [SecurityGuard]
  },
  {
    path: 'documents',
    loadChildren: () => import('./dashboard/modules/documents/documents.module').then(m => m.DocumentsModule),
    canActivate: [SecurityGuard]
  },
  {
    path: 'org-empl',
    loadChildren: () => import('./dashboard/modules/org-empl/org-empl.module').then(m => m.OrgEmplModule),
    canActivate: [SecurityGuard]
  },
  {
    path: 'wallet',
    loadChildren: () => import('./dashboard/modules/wallet/wallet.module').then(m => m.WalletModule),
    canActivate: [SecurityGuard]
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [PublicGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
