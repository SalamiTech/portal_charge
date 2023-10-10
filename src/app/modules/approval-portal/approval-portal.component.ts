import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-approval-portal',
  templateUrl: './approval-portal.component.html',
  styleUrls: ['./approval-portal.component.scss']
})
export class ApprovalPortalComponent {
assetUrl: any;


constructor(private router: Router) {}

isRouteActive(route: string): boolean {
  return this.router.url.includes(route);
}

}
