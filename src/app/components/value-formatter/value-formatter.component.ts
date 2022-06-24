import { Component, OnInit } from '@angular/core';
import { ColDef, GridReadyEvent, ValueFormatterParams } from 'ag-grid-community';

@Component({
  selector: 'app-value-formatter',
  templateUrl: './value-formatter.component.html',
  styleUrls: ['./value-formatter.component.css']
})
export class ValueFormatterComponent implements OnInit {
  public columnDefs: ColDef[] = [
    { headerName: 'X', field: 'x' },

    { headerName: '₹ X', field: 'x', valueFormatter: currencyFormatter },

    { headerName: '(X)', field: 'x', valueFormatter: bracketsFormatter },

  ];
  public defaultColDef: ColDef = {
    flex: 1,
    cellClass: 'number-cell',
    resizable: true,
  };
  public rowData: any[] | null = createRowData();

  onGridReady(params: GridReadyEvent) {}
  constructor() { }

  ngOnInit(): void {
  }

}


function bracketsFormatter(p: ValueFormatterParams) {
  return '(' + p.value + ')';
}
function currencyFormatter(params: ValueFormatterParams) {
  return '₹' + formatNumber(params.value);
}
function formatNumber(number: number) {
  // this puts commas into the number eg 1000 goes to 1,000,
  // i pulled this from stack overflow, i have no idea how it works
  return Math.floor(number)
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}
function createRowData() {
  let rowData = [];
  for (let i = 0; i < 7; i++) {
    rowData.push({
      x: Math.floor(((i + 2) * 173456) % 10000),
    });
  }
  return rowData;
}

