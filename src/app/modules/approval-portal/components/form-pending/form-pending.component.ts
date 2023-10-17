import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import {
  TableElement,
  ELEMENT_DATA,
} from '../../pages/pending-request/pending-request.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RejectreasondialogueComponent } from '../rejectreasondialogue/rejectreasondialogue.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-form-pending',
  templateUrl: './form-pending.component.html',
  styleUrls: ['./form-pending.component.scss']
})
export class FormPendingComponent implements OnInit {
  form: FormGroup = this.fb.group({});

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private _snackBar: MatSnackBar,
    private router: Router,
    private dialog: MatDialog 
  ) {}

  ngOnInit(): void {
    const accountNumber = this.route.snapshot.paramMap.get('accountNumber');
    console.log('Retrieved accountNumber from route:', accountNumber);

    const rowData = ELEMENT_DATA.find(
      (row) => row.accountNumber === accountNumber
    );
    console.log('Fetched rowData from ELEMENT_DATA:', rowData);

    this.form = this.fb.group({
      accountNumber: [rowData?.accountNumber],
      name: [rowData?.name],
      roleOfPerson: [rowData?.roleOfPerson],
      amount: [rowData?.amount],
      status: [rowData?.status],
      typeOfOffense: [rowData?.typeOfOffense],
      date: [rowData?.date],
    });

    // Disabled the form for viewing only
    this.form.disable();
  }

  openSnackBar() {
    this._snackBar.open('Request approved!', 'Close', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: 'success-snackbar'
    });

    
}

  goBack(): void {
    this.location.back();
  }

  doneButton() {
    this.router.navigate(['approval-portal/home/dashboard']).then(() => {
      setTimeout(() => {
        this.openSnackBar();
      }, 100);
    });
  }

  onReject(): void {
    const dialogRef = this.dialog.open(RejectreasondialogueComponent);

    dialogRef.afterClosed().subscribe(result => {
        if (result) {
            this._snackBar.open('Request Rejected', 'Close', {
                duration: 3000,
                horizontalPosition: 'center',
                verticalPosition: 'top',
                panelClass: ['snackbar-error']
            });
            this.goBack();
        }
    });
}
}
