// view-pending.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { TableElement, ELEMENT_DATA } from '../../pages/pending-request/pending-request.component';

@Component({
  selector: 'app-view-pending',
  templateUrl: './view-pending.component.html',
  styleUrls: ['./view-pending.component.scss'],
})
export class ViewPendingComponent implements OnInit {
  form: FormGroup = this.fb.group({});

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    const accountNumber = this.route.snapshot.paramMap.get('accountNumber');
    const rowData = ELEMENT_DATA.find((row: TableElement) => row.accountNumber === accountNumber);

    this.form = this.fb.group({
      accountNumber: [rowData?.accountNumber],
      name: [rowData?.name],
      roleOfPerson: [rowData?.roleOfPerson],
      amount: [rowData?.amount],
      status: [rowData?.status],
      typeOfOffense: [rowData?.typeOfOffense],
      date: [rowData?.date]
    });

    // Disable the form for viewing only
    this.form.disable();
  }

  goBack(): void {
    this.location.back();
  }

  doneButton() {
    this.goBack(); 
  }
}
