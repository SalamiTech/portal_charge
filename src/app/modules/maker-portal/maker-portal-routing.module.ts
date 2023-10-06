import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MakerPortalComponent } from './maker-portal.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: MakerPortalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MakerPortalRoutingModule { }
