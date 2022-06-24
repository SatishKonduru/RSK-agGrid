import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { CurrencyRendererComponent } from '../currency-renderer/currency-renderer.component';

@Component({
  selector: 'app-renderer-components',
  templateUrl: './renderer-components.component.html',
  styleUrls: ['./renderer-components.component.css']
})
export class RendererComponentsComponent implements OnInit {
private _rendererComponentsURL ='../../../assets/sharedData/rowSelection.json'
private _gridAPI : GridApi
columnDefs : ColDef[] =[
  {field: 'name'},
  {field: 'course'},
  {field: 'age'},
  {
    field: 'price',
    editable: true,
    cellRenderer: 'currencyRenderer'

  }
]
rowData: any[] | null ;
  constructor(private _http: HttpClient) { }
onGridReady(p: GridReadyEvent){
  this._gridAPI = p.api
  this._http.get<any[]>(this._rendererComponentsURL)
  .subscribe(res => this.rowData = res)
}
  ngOnInit(): void {
  }

  // Custom framework components registered by name
  frameworkComponents = {
    currencyRenderer : CurrencyRendererComponent
  }

}
