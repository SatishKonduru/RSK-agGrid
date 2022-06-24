import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'app-row-drag',
  templateUrl: './row-drag.component.html',
  styleUrls: ['./row-drag.component.css']
})
export class RowDragComponent implements OnInit {
private _rowDragURL = '../../../assets/sharedData/rowSelection.json'
private _gridAPI : GridApi
columnDefs : ColDef[] = [
  {field: 'name', rowDrag: true, sortable:true},
  {field: 'course'},
  {field: 'age'}
]
rowData: any[] | null ;
  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
  }
  onGridReady(p: GridReadyEvent){
    this._gridAPI = p.api
    this._http.get<any[]>(this._rowDragURL)
    .subscribe(res => this.rowData = res)
  }

}
