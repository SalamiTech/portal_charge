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


@NgModule({
  declarations: [
    DashboardComponent,
    PendingRequestComponent,
    ApprovedRequestComponent,
    RejectedRequestComponent,
    HistoryComponent,
    UserManagementComponent
  ],
  imports: [
    CommonModule,
    MakerPortalRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class MakerPortalModule { }
