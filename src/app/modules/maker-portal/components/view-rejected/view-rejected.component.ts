import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import {
  TableElement,
  ELEMENT_DATA,
} from '../../pages/rejected-request/rejected-request.component';

@Component({
  selector: 'app-view-rejected',
  templateUrl: './view-rejected.component.html',
  styleUrls: ['./view-rejected.component.scss']
})
export class ViewRejectedComponent implements OnInit {
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
