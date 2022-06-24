import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }
  columnDefs: ColDef[] = [
  {
    headerName: 'Student Name',
    field: 'name',
    sortable: true,
    filter: true
  },
  {
    headerName: 'Age',
    field: 'age',
    sortable: true,
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: 'Date of Joining',
    field: 'doj',
    sortable: true,
    filter: 'agDateColumnFilter',
    filterParams : {
    comparator: function (filterDate: Date, cellValue: string) {
      let dateAsString = cellValue;
      if (dateAsString == null) return -1;
      let dateParts = dateAsString.split('/');
      let cellDate = new Date(
        Number(dateParts[2]),
        Number(dateParts[1]) - 1,
        Number(dateParts[0])
      );
      if (filterDate.getTime() === cellDate.getTime()) {
        return 0;
      }
      if (cellDate < filterDate) {
        return -1;
      }
      if (cellDate > filterDate) {
        return 1;
      }
    },
    browserDatePicker: true,
      }
  }
  ]
  rowData = [
    {name: 'Satish', age: 42, doj: '02/02/2022'},
    {name: 'Konduru', age: 35, doj: '12/02/2021'},
    {name: 'RSK', age: 25, doj: '29/12/2022'},
    {name: 'Renu', age: 36, doj: '07/07/2000'}

  ]

  ngOnInit(): void {
  }

}
