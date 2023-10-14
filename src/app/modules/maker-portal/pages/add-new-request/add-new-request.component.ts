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

interface AccountName {
  value: string;
  label: string;
}

interface TypeOfOffense {
  value: string;
  label: string;
}

interface RoleOfEmployee {
  value: string;
  label: string;
}


@Component({
  selector: 'app-add-new-request',
  templateUrl: './add-new-request.component.html',
  styleUrls: ['./add-new-request.component.scss']
})
export class AddNewRequestComponent {

  accountname: AccountName[] = [
    { value: "nana-ama-0", label: "Nana Ama Aidoo-Taylor"},
    { value: "gideon-salami-1", label: "Gideon Salami"},
    { value: "paul-boamah-0", label: "Paul Boamah"},
    { value: "emmanual-botchway-1", label: "Emmanual Botchway"},
  ];

  typeofoffense: TypeOfOffense[] = [
    { value: "a-0", label: "Lateness to Demo Meeting"},
    { value: "b-1", label: "Lateness to Stand Up Meeting"},
    { value: "c-0", label: "Missed Sprint Retrospective Meeting"},
    { value: "d-1", label: "Missed Stand Up Meeting"},
  ];

  roleofemployee: RoleOfEmployee[] = [
    { value: "a-0", label: "Intern"},
    { value: "b-1", label: "NSP"},
    { value: "c-0", label: "Contract Employee"},
    { value: "d-1", label: "Full-Time Employee"},
  ];


  assetUrl = environment.assetsUrl;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';


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


  gotoDashboard(){
    this.router.navigate(['maker-portal/home/dashboard/dash-confirm']).then(() => {
      setTimeout(() => {
        this.openSnackBar();
      }, 100);
    });
}

submitForm() {
    this.openSnackBar();
    this.gotoDashboard();
}



}