import { Component, OnInit } from '@angular/core';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'app-update-row-data',
  templateUrl: './update-row-data.component.html',
  styleUrls: ['./update-row-data.component.css']
})
export class UpdateRowDataComponent implements OnInit {
  private gridApi!: GridApi;
  constructor() { }

  ngOnInit(): void {
  }
   // specify the data

 Batch1 = [
  { name: 'Satish', course: 'Angular', price: 35000 },
  { name: 'RSK', course: 'React', price: 72000 },
  { name: 'Renu', course: 'Vue', price: 10000 },
];
 Batch2 = [
  { name: 'Nagesh', course: 'BootStrap', price: 32000 },
  { name: 'Radha', course: 'Material', price: 60000 },
 ];
  public columnDefs: ColDef[] = [
    { field: 'name' },
    { field: 'course' },
    { field: 'price' },
  ];
  public rowData: any[] | null = this.Batch1;
  public rowSelection = 'single';

  onBatch1(){
    this.gridApi.setRowData(this.Batch1);
  }
  onBatch2() {
    this.gridApi.setRowData(this.Batch2);
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }



}
