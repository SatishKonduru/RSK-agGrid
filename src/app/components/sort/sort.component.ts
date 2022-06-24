import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {

  constructor() { }
  columnDefs : ColDef[] = [
    {headerName: 'Course Name',  field: 'course', sortable: true},
    {headerName: 'Trainer Name', field: 'trainer', sortable: true, maxWidth: 500},
    {headerName: 'Course Fee', field: 'fee', sortable: true}
  ]
  rowData = [
    {course: 'Angular', trainer: 'RSK', fee: 45000},
    {course: 'React', trainer: 'SATISH', fee: 35000},
    {course: 'Vue', trainer: 'KONDURU', fee: 20000}
  ]

  ngOnInit(): void {
  }

}
