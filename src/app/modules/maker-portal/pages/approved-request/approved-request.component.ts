import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';


export interface TableElement {
  accountNumber: string;
  name: string;
  roleOfPerson: string;
  amount: string;
  status: string;
  typeOfOffense: string;
  date: string;
  
}

export const ELEMENT_DATA: TableElement[] = [
 
  {
    accountNumber: '673848990222',
    name: 'Howie Aidoo',
    roleOfPerson: 'FrontEnd',
    amount: 'GHC 50',
    status: 'Approved',
    typeOfOffense: 'Late to Stand Up',
    date: '09-Nov-2023',
  },

  {
    accountNumber: '6738489334342',
    name: 'Ama Santiago',
    roleOfPerson: 'FrontEnd',
    amount: 'GHC 50',
    status: 'Approved',
    typeOfOffense: 'Late to Stand Up',
    date: '09-Nov-2023',
  },

  {
    accountNumber: '673848990241',
    name: 'Nipa Ye-Cobra',
    roleOfPerson: 'FrontEnd',
    amount: 'GHC 50',
    status: 'Approved',
    typeOfOffense: 'Late to Stand Up',
    date: '09-Nov-2023',
  },

  {
    accountNumber: '673848590241',
    name: 'Naa Despite',
    roleOfPerson: 'BackEnd',
    amount: 'GHC 150',
    status: 'Approved',
    typeOfOffense: 'Late to Stand Up',
    date: '09-Nov-2023',
  },

  {
    accountNumber: '673848920241',
    name: 'Amos Aidoo',
    roleOfPerson: 'FrontEnd',
    amount: 'GHC 50',
    status: 'Approved',
    typeOfOffense: 'Late to Stand Up',
    date: '09-Nov-2023',
  },

  {
    accountNumber: '673838990241',
    name: 'Fanman Aidoo',
    roleOfPerson: 'FrontEnd',
    amount: 'GHC 50',
    status: 'Approved',
    typeOfOffense: 'Late to Stand Up',
    date: '09-Nov-2023',
  },
  
];
@Component({
  selector: 'app-approved-request',
  templateUrl: './approved-request.component.html',
  styleUrls: ['./approved-request.component.scss']
})
export class ApprovedRequestComponent {
  displayedColumns: string[] = [
    'select',
    'accountNumber',
    'name',
    'roleOfPerson',
    'amount',
    'status',
    'typeOfOffense',
    'date',
    
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

  constructor(private router: Router) {}
  navigateToDetails(row: TableElement) {
    // Navigate to the details view component and pass the selected row data
    console.log("Navigating to details with data:", row);
    this.router.navigate([
      '/maker-portal/home/view-approved',
      row.accountNumber,
    ]);
  }
}


