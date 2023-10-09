import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApprovalPortalComponent } from './approval-portal.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PendingRequestComponent } from './pages/pending-request/pending-request.component';
import { ApprovedRequestsComponent } from './pages/approved-requests/approved-requests.component';
import { RejectedRequestsComponent } from './pages/rejected-requests/rejected-requests.component';
import { HistoryComponent } from './pages/history/history.component';
import { UserManagementsComponent } from './pages/user-managements/user-managements.component';
import { AddNewRequestsComponent } from './pages/add-new-requests/add-new-requests.component';

const routes: Routes = [
  {
    path: 'home',
    component: ApprovalPortalComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'dashboard/add-new-request', component: AddNewRequestsComponent }, // New route
      { path: 'pending-request', component: PendingRequestComponent },
      { path: 'approved-request', component: ApprovedRequestsComponent },
      { path: 'rejected-request', component: RejectedRequestsComponent },
      { path: 'history', component: HistoryComponent },
      { path: 'user-management', component: UserManagementsComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApprovalPortalRoutingModule { }
