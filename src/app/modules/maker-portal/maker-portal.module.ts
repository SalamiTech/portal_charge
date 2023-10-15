import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MakerPortalRoutingModule } from './maker-portal-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PendingRequestComponent } from './pages/pending-request/pending-request.component';
import { ApprovedRequestComponent } from './pages/approved-request/approved-request.component';
import { RejectedRequestComponent } from './pages/rejected-request/rejected-request.component';
import { HistoryComponent } from './pages/history/history.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material.module';
import { AddNewRequestComponent } from './pages/add-new-request/add-new-request.component';
import { DashTableComponent } from './components/dash-table/dash-table.component';
import { ViewApprovedComponent } from './components/view-approved/view-approved.component';
import { ViewRejectedComponent } from './components/view-rejected/view-rejected.component';
import { ViewPendingComponent } from './components/view-pending/view-pending.component';


@NgModule({
  declarations: [
    DashboardComponent,
    PendingRequestComponent,
    ApprovedRequestComponent,
    RejectedRequestComponent,
    HistoryComponent,
    UserManagementComponent,
    AddNewRequestComponent,
    DashTableComponent,
    ViewApprovedComponent,
    ViewRejectedComponent,
    ViewPendingComponent
  ],
  imports: [
    CommonModule,
    MakerPortalRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class MakerPortalModule { }
