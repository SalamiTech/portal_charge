import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarModule,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent {

  constructor(private location: Location, private router: Router, private _snackBar: MatSnackBar) {} 

  goBack(): void {
    this.location.back();
  }

  openSnackBar() {
    this._snackBar.open('Successfully submitted!', 'Close', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: 'success-snackbar'
    });
}




submitForm() {
    this.openSnackBar();
}



}



