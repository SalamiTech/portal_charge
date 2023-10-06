import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApprovalPortalComponent } from './approval-portal.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: ApprovalPortalComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApprovalPortalRoutingModule { }
