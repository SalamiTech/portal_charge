import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApprovalPortalRoutingModule } from './approval-portal-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PendingRequestComponent } from './pages/pending-request/pending-request.component';
import { ApprovedRequestsComponent } from './pages/approved-requests/approved-requests.component';
import { RejectedRequestsComponent } from './pages/rejected-requests/rejected-requests.component';
import { HistoryComponent } from './pages/history/history.component';
import { UserManagementsComponent } from './pages/user-managements/user-managements.component';
import { JwtHelperService } from '@auth0/angular-jwt';


@NgModule({
  declarations: [
    DashboardComponent,
    PendingRequestComponent,
    ApprovedRequestsComponent,
    RejectedRequestsComponent,
    HistoryComponent,
    UserManagementsComponent
  ],
  imports: [
    CommonModule,
    ApprovalPortalRoutingModule,
  ],
  providers: [
    JwtHelperService
  ]
})
export class ApprovalPortalModule { }
