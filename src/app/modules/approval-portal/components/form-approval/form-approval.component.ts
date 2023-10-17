import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ELEMENT_DATA } from 'src/app/modules/maker-portal/pages/pending-request/pending-request.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-form-approval',
  templateUrl: './form-approval.component.html',
  styleUrls: ['./form-approval.component.scss']
})
export class FormApprovalComponent implements OnInit {
  form: FormGroup = this.fb.group({});

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private snackBar: MatSnackBar

  ) {}

  ngOnInit(): void {
    const accountNumber = this.route.snapshot.paramMap.get('accountNumber');
    console.log('Retrieved accountNumber from route:', accountNumber);

    const rowData = ELEMENT_DATA.find(
      (row: { accountNumber: string | null; }) => row.accountNumber === accountNumber
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

  goBack(): void {
    this.location.back();
  }

  approve() {
    // ... any other logic for approval
    this.snackBar.open('Details have been approved', 'Close', {
      duration: 2000,
    });
    this.goBack();
  }

  openRejectDialog() {
    const dialogRef = this.dialog.open(RejectReasonDialogComponent);
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.snackBar.open('Details have been rejected', 'Close', {
          duration: 2000,
        });
        this.goBack();
      }
    });
  }
  
}
