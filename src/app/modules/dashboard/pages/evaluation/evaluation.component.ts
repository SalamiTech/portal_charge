import { Component } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';

export interface TableElement {
  customerName: string;
  customerNumber: string;
  accountNumber: string;
  propertyOwner: string;
  valuer: string;
  propertyDetails: string;
  currency: string;
  jrr: string;
  omv: string;
  fsv: string;
  riv: string;
  rate: string;
  lcyFsv: string;
  dateValued: string;
  status: string;
  relationshipManager: string;
  collateralComments: string;
}

const ELEMENT_DATA: TableElement[] = [
  {
    customerName: 'John Doe',
    customerNumber: 'C12345',
    accountNumber: 'A98765',
    propertyOwner: 'Jane Smith',
    valuer: 'Michael Johnson',
    propertyDetails: '123 Main St.',
    currency: 'USD',
    jrr: '1000',
    omv: '150000',
    fsv: '140000',
    riv: '135000',
    rate: '5%',
    lcyFsv: '125000',
    dateValued: '2023-08-15',
    status: 'Approved',
    relationshipManager: 'Robert Brown',
    collateralComments: 'Good condition'
  },
  {
    customerName: 'John Doe',
    customerNumber: 'C12345',
    accountNumber: 'A98765',
    propertyOwner: 'Jane Smith',
    valuer: 'Michael Johnson',
    propertyDetails: '123 Main St.',
    currency: 'USD',
    jrr: '1000',
    omv: '150000',
    fsv: '140000',
    riv: '135000',
    rate: '5%',
    lcyFsv: '125000',
    dateValued: '2023-08-15',
    status: 'Approved',
    relationshipManager: 'Robert Brown',
    collateralComments: 'Good condition'
  },
  {
    customerName: 'John Doe',
    customerNumber: 'C12345',
    accountNumber: 'A98765',
    propertyOwner: 'Jane Smith',
    valuer: 'Michael Johnson',
    propertyDetails: '123 Main St.',
    currency: 'USD',
    jrr: '1000',
    omv: '150000',
    fsv: '140000',
    riv: '135000',
    rate: '5%',
    lcyFsv: '125000',
    dateValued: '2023-08-15',
    status: 'Approved',
    relationshipManager: 'Robert Brown',
    collateralComments: 'Good condition'
  },
  {
    customerName: 'John Doe',
    customerNumber: 'C12345',
    accountNumber: 'A98765',
    propertyOwner: 'Jane Smith',
    valuer: 'Michael Johnson',
    propertyDetails: '123 Main St.',
    currency: 'USD',
    jrr: '1000',
    omv: '150000',
    fsv: '140000',
    riv: '135000',
    rate: '5%',
    lcyFsv: '125000',
    dateValued: '2023-08-15',
    status: 'Approved',
    relationshipManager: 'Robert Brown',
    collateralComments: 'Good condition'
  },
  {
    customerName: 'John Doe',
    customerNumber: 'C12345',
    accountNumber: 'A98765',
    propertyOwner: 'Jane Smith',
    valuer: 'Michael Johnson',
    propertyDetails: '123 Main St.',
    currency: 'USD',
    jrr: '1000',
    omv: '150000',
    fsv: '140000',
    riv: '135000',
    rate: '5%',
    lcyFsv: '125000',
    dateValued: '2023-08-15',
    status: 'Approved',
    relationshipManager: 'Robert Brown',
    collateralComments: 'Good condition'
  },
  {
    customerName: 'John Doe',
    customerNumber: 'C12345',
    accountNumber: 'A98765',
    propertyOwner: 'Jane Smith',
    valuer: 'Michael Johnson',
    propertyDetails: '123 Main St.',
    currency: 'USD',
    jrr: '1000',
    omv: '150000',
    fsv: '140000',
    riv: '135000',
    rate: '5%',
    lcyFsv: '125000',
    dateValued: '2023-08-15',
    status: 'Approved',
    relationshipManager: 'Robert Brown',
    collateralComments: 'Good condition'
  },
  {
    customerName: 'John Doe',
    customerNumber: 'C12345',
    accountNumber: 'A98765',
    propertyOwner: 'Jane Smith',
    valuer: 'Michael Johnson',
    propertyDetails: '123 Main St.',
    currency: 'USD',
    jrr: '1000',
    omv: '150000',
    fsv: '140000',
    riv: '135000',
    rate: '5%',
    lcyFsv: '125000',
    dateValued: '2023-08-15',
    status: 'Approved',
    relationshipManager: 'Robert Brown',
    collateralComments: 'Good condition'
  },
  {
    customerName: 'John Doe',
    customerNumber: 'C12345',
    accountNumber: 'A98765',
    propertyOwner: 'Jane Smith',
    valuer: 'Michael Johnson',
    propertyDetails: '123 Main St.',
    currency: 'USD',
    jrr: '1000',
    omv: '150000',
    fsv: '140000',
    riv: '135000',
    rate: '5%',
    lcyFsv: '125000',
    dateValued: '2023-08-15',
    status: 'Approved',
    relationshipManager: 'Robert Brown',
    collateralComments: 'Good condition'
  },
  {
    customerName: 'John Doe',
    customerNumber: 'C12345',
    accountNumber: 'A98765',
    propertyOwner: 'Jane Smith',
    valuer: 'Michael Johnson',
    propertyDetails: '123 Main St.',
    currency: 'USD',
    jrr: '1000',
    omv: '150000',
    fsv: '140000',
    riv: '135000',
    rate: '5%',
    lcyFsv: '125000',
    dateValued: '2023-08-15',
    status: 'Approved',
    relationshipManager: 'Robert Brown',
    collateralComments: 'Good condition'
    
  },
  {
    customerName: 'John Doe',
    customerNumber: 'C12345',
    accountNumber: 'A98765',
    propertyOwner: 'Jane Smith',
    valuer: 'Michael Johnson',
    propertyDetails: '123 Main St.',
    currency: 'USD',
    jrr: '1000',
    omv: '150000',
    fsv: '140000',
    riv: '135000',
    rate: '5%',
    lcyFsv: '125000',
    dateValued: '2023-08-15',
    status: 'Approved',
    relationshipManager: 'Robert Brown',
    collateralComments: 'Good condition'
  },
  {
    customerName: 'John Doe',
    customerNumber: 'C12345',
    accountNumber: 'A98765',
    propertyOwner: 'Jane Smith',
    valuer: 'Michael Johnson',
    propertyDetails: '123 Main St.',
    currency: 'USD',
    jrr: '1000',
    omv: '150000',
    fsv: '140000',
    riv: '135000',
    rate: '5%',
    lcyFsv: '125000',
    dateValued: '2023-08-15',
    status: 'Approved',
    relationshipManager: 'Robert Brown',
    collateralComments: 'Good condition'
  },
  {
    customerName: 'John Doe',
    customerNumber: 'C12345',
    accountNumber: 'A98765',
    propertyOwner: 'Jane Smith',
    valuer: 'Michael Johnson',
    propertyDetails: '123 Main St.',
    currency: 'USD',
    jrr: '1000',
    omv: '150000',
    fsv: '140000',
    riv: '135000',
    rate: '5%',
    lcyFsv: '125000',
    dateValued: '2023-08-15',
    status: 'Approved',
    relationshipManager: 'Robert Brown',
    collateralComments: 'Good condition'
  },
  {
    customerName: 'John Doe',
    customerNumber: 'C12345',
    accountNumber: 'A98765',
    propertyOwner: 'Jane Smith',
    valuer: 'Michael Johnson',
    propertyDetails: '123 Main St.',
    currency: 'USD',
    jrr: '1000',
    omv: '150000',
    fsv: '140000',
    riv: '135000',
    rate: '5%',
    lcyFsv: '125000',
    dateValued: '2023-08-15',
    status: 'Approved',
    relationshipManager: 'Robert Brown',
    collateralComments: 'Good condition'
  },
  
];

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.scss'],
})
export class EvaluationComponent {
  displayedColumns: string[] = [
    'customerName',
    'customerNumber',
    'accountNumber',
    'propertyOwner',
    'valuer',
    'propertyDetails',
    'currency',
    'jrr',
    'omv',
    'fsv',
    'riv',
    'rate',
    'lcyFsv',
    'dateValued',
    'status',
    'relationshipManager',
    'collateralComments',
  ];

  dataSource = new MatTableDataSource<TableElement>(ELEMENT_DATA);
  selection = new SelectionModel<TableElement>(true, []);

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  checkboxLabel(row?: TableElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row`;
  }
}
