import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'app-row-styling',
  templateUrl: './row-styling.component.html',
  styleUrls: ['./row-styling.component.css']
})
export class RowStylingComponent implements OnInit {
private _rowStylingURL ='../../../assets/sharedData/rowSelection.json'
private _gridAPI : GridApi
columnDefs: ColDef[] =[
  {
    field: 'name'
  },
  {
    field: 'course'
  },
  {
    field: 'age'
  }
]
rowData: any[] | null ;
  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
  }
  onGridReady(p: GridReadyEvent){
    this._gridAPI = p.api
    this._http.get<any[]>(this._rowStylingURL)
    .subscribe(res => this.rowData = res)
  }
  // getRowClass({data}){
  //   return (data.name.length > 5) ? 'rowStyle' : ''
  // }
  rowClassRules = {
    'rowStyle' : ({data}) => data.name.length > 5,
    'rowDanger':  (({data}) => data.name.length >= 3) && (({data}) => data.name.length <= 5)
  }
}
