import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MakerPortalComponent } from './modules/maker-portal/maker-portal.component';
import { ApprovalPortalComponent } from './modules/approval-portal/approval-portal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from "./shared/shared.module";
import { JwtHelperService } from '@auth0/angular-jwt';

@NgModule({
    declarations: [
        AppComponent,
        MakerPortalComponent,
        ApprovalPortalComponent
    ],
    providers: [
        JwtHelperService
      ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SharedModule
    ]
})
export class AppModule { }
