import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'authentication',
  //   loadChildren: () =>
  //     import('./modules/authentication/authentication.module').then((m) => m.AuthenticationModule),
  // },

  {
    path: 'approval-portal',
    loadChildren: () => 
      import('./modules/approval-portal/approval-portal.module').then((m) => m.ApprovalPortalModule),
  },

  {
    path: 'maker-portal',
    loadChildren: () =>
      import('./modules/maker-portal/maker-portal.module').then((m) => m.MakerPortalModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
