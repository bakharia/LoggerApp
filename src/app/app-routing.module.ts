import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'lead-page/:id', loadChildren: './pages/lead-page/lead-page.module#LeadPagePageModule' },
  //{ path: 'lead-details', loadChildren: './pages/lead-details/lead-details.module#LeadDetailsPageModule' },
  { path: 'callmodal', loadChildren: './pages/lead-page/callmodal/callmodal.module#CallmodalPageModule' },
  { path: 'msgmodal', loadChildren: './pages/lead-page/msgmodal/msgmodal.module#MsgmodalPageModule' },
  { path: 'emailmodal', loadChildren: './pages/lead-page/emailmodal/emailmodal.module#EmailmodalPageModule' },
  //{ path: 'sidemenu', loadChildren: './pages/lead-page/sidemenu/sidemenu.module#SidemenuPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
