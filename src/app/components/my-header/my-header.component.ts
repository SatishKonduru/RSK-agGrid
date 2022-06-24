import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { MaterialHeaderComponent } from '../material-header/material-header.component';

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.css']
})
export class MyHeaderComponent implements OnInit {
private _myHeaderURL = '../../../assets/sharedData/rowSelection.json'
private _gridAPI : GridApi
columnDefs: ColDef[] = [
  {field: 'name'},
  {field: 'course'},
  {field: 'age'},
  {field: 'price'}
]
rowData: any[] | null
defaultColDef: ColDef = {
  sortable: true
}
  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
  }
onGridReady(p: GridReadyEvent){
  this._gridAPI = p.api
  this._http.get<any[]>(this._myHeaderURL)
  .subscribe(res => this.rowData = res)
}

frameworkComponents = {
  agColumnHeader: MaterialHeaderComponent
}


}
