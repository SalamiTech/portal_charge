import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import {
  TableElement,
  ELEMENT_DATA,
} from '../../pages/pending-request/pending-request.component';
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
    private location: Location
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

  goBack(): void {
    this.location.back();
  }

  doneButton() {
    this.goBack();
  }
}

