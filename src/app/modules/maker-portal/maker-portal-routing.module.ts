import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MakerPortalComponent } from './maker-portal.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PendingRequestComponent } from './pages/pending-request/pending-request.component';
import { RejectedRequestComponent } from './pages/rejected-request/rejected-request.component';
import { ApprovedRequestComponent } from './pages/approved-request/approved-request.component';
import { HistoryComponent } from './pages/history/history.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';
import { AddNewRequestComponent } from './pages/add-new-request/add-new-request.component';
import { DashTableComponent } from './components/dash-table/dash-table.component';
import { ViewPendingComponent } from './components/view-pending/view-pending.component';
import { ViewRejectedComponent } from './components/view-rejected/view-rejected.component';
import { ViewApprovedComponent } from './components/view-approved/view-approved.component';

const routes: Routes = [
  {
    path: 'home',
    component: MakerPortalComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'dashboard/add-new-request', component: AddNewRequestComponent },
      { path: 'dashboard/dash-confirm', component: DashTableComponent },
      { path: 'pending-request', component: PendingRequestComponent },
      { path: 'approved-request', component: ApprovedRequestComponent },
      { path: 'rejected-request', component: RejectedRequestComponent },
      { path: 'history', component: HistoryComponent },
      { path: 'user-management', component: UserManagementComponent },
      { path: 'view-pending/:accountNumber', component: ViewPendingComponent },
      { path: 'view-rejected/:accountNumber', component: ViewRejectedComponent },
      { path: 'view-approved/:accountNumber', component: ViewApprovedComponent },
      
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MakerPortalRoutingModule { }
