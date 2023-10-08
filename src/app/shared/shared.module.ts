import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { DashboardContainerComponent } from './lib/dashboard-container/dashboard-container.component';
import { DashboardContentContainerComponent } from './lib/dashboard-content-container/dashboard-content-container.component';
import { DashboardHeaderComponent } from './lib/dashboard-header/dashboard-header.component';
import { MainContentContainerComponent } from './lib/main-content-container/main-content-container.component';
import { SideNavContainerComponent } from './lib/side-nav-container/side-nav-container.component';



@NgModule({
  declarations: [
    DashboardContainerComponent,
    DashboardContentContainerComponent,
    DashboardHeaderComponent,
    MainContentContainerComponent, 
    SideNavContainerComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    DashboardContainerComponent,
    DashboardContentContainerComponent,
    DashboardHeaderComponent,
    MainContentContainerComponent, 
    SideNavContainerComponent
  ]
})
export class SharedModule { }
