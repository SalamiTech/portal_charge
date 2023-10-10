import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maker-portal',
  templateUrl: './maker-portal.component.html',
  styleUrls: ['./maker-portal.component.scss']
})
export class MakerPortalComponent {

constructor(private router: Router) {}

isRouteActive(route: string): boolean {
  return this.router.url.includes(route);
}

}
