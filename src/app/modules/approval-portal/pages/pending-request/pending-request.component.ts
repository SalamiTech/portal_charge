import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface TableElement {
  accountNumber: string;
  name: string;
  roleOfPerson: string;
  amount: string;
  status: string;
  typeOfOffense: string;
  date: string;
  
}

const ELEMENT_DATA: TableElement[] = [
 
  {
    accountNumber: '673848990241',
    name: 'Jessica Aidoo',
    roleOfPerson: 'FrontEnd',
    amount: 'GHC 50',
    status: 'Pending',
    typeOfOffense: 'Late to Stand Up',
    date: '09-Nov-2023', 
  },

  {
    accountNumber: '673848990241',
    name: 'Jessica Aidoo',
    roleOfPerson: 'FrontEnd',
    amount: 'GHC 50',
    status: 'Pending',
    typeOfOffense: 'Late to Stand Up',
    date: '09-Nov-2023', 
  },

  {
    accountNumber: '673848990241',
    name: 'Jessica Aidoo',
    roleOfPerson: 'FrontEnd',
    amount: 'GHC 50',
    status: 'Pending',
    typeOfOffense: 'Late to Stand Up',
    date: '09-Nov-2023', 
  },

  {
    accountNumber: '673848990241',
    name: 'Jessica Aidoo',
    roleOfPerson: 'FrontEnd',
    amount: 'GHC 50',
    status: 'Pending',
    typeOfOffense: 'Late to Stand Up',
    date: '09-Nov-2023', 
  },

  {
    accountNumber: '673848990241',
    name: 'Jessica Aidoo',
    roleOfPerson: 'FrontEnd',
    amount: 'GHC 50',
    status: 'Pending',
    typeOfOffense: 'Late to Stand Up',
    date: '09-Nov-2023', 
  },

  {
    accountNumber: '673848990241',
    name: 'Jessica Aidoo',
    roleOfPerson: 'FrontEnd',
    amount: 'GHC 50',
    status: 'Pending',
    typeOfOffense: 'Late to Stand Up',
    date: '09-Nov-2023', 
  },
  
];

@Component({
  selector: 'app-pending-request',
  templateUrl: './pending-request.component.html',
  styleUrls: ['./pending-request.component.scss']
})
export class PendingRequestComponent {
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
}
