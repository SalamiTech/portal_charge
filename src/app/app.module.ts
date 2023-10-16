import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MakerPortalComponent } from './modules/maker-portal/maker-portal.component';
import { ApprovalPortalComponent } from './modules/approval-portal/approval-portal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from "./shared/shared.module";
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { APIService } from './shared/services/api.service';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { AuthService } from './shared/services/auth.service';
import { EventBusService } from './shared/services/event-bus.service';
import { NavigationService } from './shared/services/navigation.service';
import { NotificationService } from './shared/services/notification.service';
import { RoleGuardService } from './shared/services/role-guard.service';
import { StateStorageService } from './shared/services/state-storage.service';
import { UploadService } from './shared/services/upload.service';
import { WizardService } from './shared/services/wizard.service';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        MakerPortalComponent,
        ApprovalPortalComponent
    ],
    providers: [
        APIService,
        AuthService,
        UploadService,
        NavigationService,
        StateStorageService,
        AuthGuardService,
        JwtHelperService,
        RoleGuardService,
        NotificationService,
        WizardService,
        EventBusService,
        { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
      ],
    
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SharedModule,
        MaterialModule,
        HttpClientModule
    ]
})
export class AppModule { }
