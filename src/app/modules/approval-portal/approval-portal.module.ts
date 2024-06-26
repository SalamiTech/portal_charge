import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApprovalPortalRoutingModule } from './approval-portal-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PendingRequestComponent } from './pages/pending-request/pending-request.component';
import { ApprovedRequestsComponent } from './pages/approved-requests/approved-requests.component';
import { RejectedRequestsComponent } from './pages/rejected-requests/rejected-requests.component';
import { HistoryComponent } from './pages/history/history.component';
import { SharedModule } from "../../shared/shared.module";
import { MaterialModule } from 'src/app/material.module';
import { FormPendingComponent } from './components/form-pending/form-pending.component';
import { FormRejectedComponent } from './components/form-rejected/form-rejected.component';
import { FormApprovalComponent } from './components/form-approval/form-approval.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RejectreasondialogueComponent } from './components/rejectreasondialogue/rejectreasondialogue.component';


@NgModule({
    declarations: [
        DashboardComponent,
        PendingRequestComponent,
        ApprovedRequestsComponent,
        RejectedRequestsComponent,
        HistoryComponent,
        FormPendingComponent,
        FormRejectedComponent,
        FormApprovalComponent,
        RejectreasondialogueComponent,    
    ],
    imports: [
        CommonModule,
        ApprovalPortalRoutingModule,
        SharedModule,
        MaterialModule,
        ReactiveFormsModule
        
    ]
})
export class ApprovalPortalModule { }
