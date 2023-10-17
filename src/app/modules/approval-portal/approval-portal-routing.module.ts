import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApprovalPortalComponent } from './approval-portal.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PendingRequestComponent } from './pages/pending-request/pending-request.component';
import { ApprovedRequestsComponent } from './pages/approved-requests/approved-requests.component';
import { RejectedRequestsComponent } from './pages/rejected-requests/rejected-requests.component';
import { HistoryComponent } from './pages/history/history.component';
import { FormApprovalComponent } from '../approval-portal/components/form-approval/form-approval.component';
import { FormPendingComponent } from '../approval-portal/components/form-pending/form-pending.component';
import { FormRejectedComponent } from '../approval-portal/components/form-rejected/form-rejected.component';



const routes: Routes = [
  {
    path: 'home',
    component: ApprovalPortalComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      //move to maker
      // { path: 'dashboard/add-new-request', component: AddNewRequestsComponent }, 
      { path: 'pending-request', component: PendingRequestComponent },
      { path: 'approved-request', component: ApprovedRequestsComponent },
      { path: 'rejected-request', component: RejectedRequestsComponent },
      { path: 'history', component: HistoryComponent },
      { path: 'form-approved/:accountNumber', component: FormApprovalComponent},
      { path: 'form-pending/:accountNumber', component: FormPendingComponent },
      { path: 'form-rejected/:accountNumber', component: FormRejectedComponent }
  

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApprovalPortalRoutingModule { }
