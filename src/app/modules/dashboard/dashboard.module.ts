import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RoutingModule } from './routing.module';
import { EvaluationComponent } from './pages/evaluation/evaluation.component';
import { InsuranceComponent } from './pages/insurance/insurance.component';
import { EntryComponentComponent } from './pages/entry-component/entry-component.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './components/right-sidebar/right-sidebar.component';
import { MiniHeaderComponent } from './components/mini-header/mini-header.component';


@NgModule({
  declarations: [
    DashboardComponent,
    EvaluationComponent,
    InsuranceComponent,
    EntryComponentComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    MiniHeaderComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    SharedModule
  ]
})
export class DashboardModule { }
