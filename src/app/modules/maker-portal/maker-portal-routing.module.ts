import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MakerPortalComponent } from './maker-portal.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PendingRequestComponent } from './pages/pending-request/pending-request.component';
import { RejectedRequestComponent } from './pages/rejected-request/rejected-request.component';
import { ApprovedRequestComponent } from './pages/approved-request/approved-request.component';
import { HistoryComponent } from './pages/history/history.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';

const routes: Routes = [
  {
    path: 'home',
    component: MakerPortalComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'pending-request', component: PendingRequestComponent },
      { path: 'approved-request', component: ApprovedRequestComponent },
      { path: 'rejected-requesr', component: RejectedRequestComponent },
      { path: 'history', component: HistoryComponent },
      { path: 'user-management', component: UserManagementComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MakerPortalRoutingModule { }
