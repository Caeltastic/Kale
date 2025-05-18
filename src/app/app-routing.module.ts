import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {
  redirectUnauthorizedTo,
  redirectLoggedInTo,
  canActivate
} from '@angular/fire/auth-guard'


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToTabs = () => redirectLoggedInTo(['tabs/tab1']);

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule),
    ...canActivate(redirectLoggedInToTabs)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
