import { Component, OnInit } from '@angular/core';
import { ColDef, ValueGetterParams } from 'ag-grid-community';

@Component({
  selector: 'app-value-getter',
  templateUrl: './value-getter.component.html',
  styleUrls: ['./value-getter.component.css']
})
export class ValueGetterComponent implements OnInit {

  public columnDefs: ColDef[] = [
    {
      headerName: '#',
      maxWidth: 100,
      valueGetter: (params: ValueGetterParams) => {
        return params.node ? params.node.rowIndex  : null;
      }
    },
    { field: 'a' },
    { field: 'b' },
    {
      headerName: 'A + B',
      colId: 'a&b',
      valueGetter: (params: ValueGetterParams) => {
        return params.data.a + params.data.b;
      }
    },
    {
      headerName: 'A * 1000',
      minWidth: 95,
      valueGetter: (params: ValueGetterParams)=> {
        return params.data.a * 1000;
      }
    },
    {
      headerName: 'B * 200',
      minWidth: 90,
      valueGetter: (params: ValueGetterParams) => {
        return params.data.b * 200;
    }
  },
    {
      headerName: 'Random',
      minWidth: 90,
      valueGetter: ()=> {
        return Math.floor(Math.random() * 1000);
      }
    },
    {
      headerName: 'Chain',
      valueGetter: (params: ValueGetterParams) => {
        return params.getValue('a&b') * 1000;
      }
    },
    {
      headerName: 'Const',
      minWidth: 85,
      valueGetter: () =>{
        return 777;
      }
    }
  ];
  public defaultColDef: ColDef = {
    flex: 1,
    minWidth: 75,

  }
  public rowData: any[] | null = this.createRowData();


   createRowData() {
    this.rowData = [];
    for (let i = 0; i <= 10; i++) {
      this.rowData.push({
        a: Math.floor(i % 4),
        b: Math.floor(i % 7),
      });
    }
    return this.rowData;
  }

  constructor() { }

  ngOnInit(): void {
  }
}
