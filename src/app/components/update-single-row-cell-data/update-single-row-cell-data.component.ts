import { Component, OnInit } from '@angular/core';
import { ColDef, GetRowIdFunc, GetRowIdParams, GridApi, GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'app-update-single-row-cell-data',
  templateUrl: './update-single-row-cell-data.component.html',
  styleUrls: ['./update-single-row-cell-data.component.css']
})
export class UpdateSingleRowCellDataComponent implements OnInit {

  private gridApi : GridApi

  constructor() { }

  ngOnInit(): void {
  }

  public rowData: any[] | null = [
    { id: '1', make: 'Toyota', model: 'Celica', price: 35000 },
    { id: '2', make: 'Ford', model: 'Mondeo', price: 32000 },
    { id: '3', make: 'Porsche', model: 'Boxster', price: 72000 },
    { id: '4', make: 'BMW', model: '5 Series', price: 59000 }

  ];
  public columnDefs: ColDef[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price', filter: 'agNumberColumnFilter' }
  ];
  public defaultColDef: ColDef = {
    flex: 1,
    editable: true,
    sortable: true,
    filter: true,
  };
  public getRowId: GetRowIdFunc =  (p: GetRowIdParams) => {
    return p.data.id;
  };

  updateSort() {
    this.gridApi.refreshClientSideRowModel('sort');
  }

  updateFilter() {
    this.gridApi.refreshClientSideRowModel('filter');
  }

  setPriceOnToyota() {
    let rowNode = this.gridApi.getRowNode('1');
    let newPrice = Math.floor(Math.random() * 100000);
    rowNode.setDataValue('price', newPrice);
  }

  setDataOnFord() {
    let rowNode = this.gridApi.getRowNode('2')!;
    let newPrice = Math.floor(Math.random() * 100000);
    let newModel = 'T-' + Math.floor(Math.random() * 1000);
    let newData = {
      id: '2',
      make: 'Ford',
      model: newModel,
      price: newPrice
    };
    rowNode.setData(newData);
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }
}
