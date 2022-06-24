import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit,  LOCALE_ID, Inject } from '@angular/core';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { DateEditorComponent } from '../date-editor/date-editor.component';

@Component({
  selector: 'app-my-editor',
  templateUrl: './my-editor.component.html',
  styleUrls: ['./my-editor.component.css']
})
export class MyEditorComponent implements OnInit {
private _myEditorURL ='../../../assets/sharedData/columnTypesData.json'
private _gridAPI : GridApi

columnDefs : ColDef[] = [
  {field: 'athlete'},
  {field: 'state'},
  {
    headerName: "Date of Joining",
    field: 'date',
    editable: true,
    valueFormatter: ({value}) => formatDate(value, 'yyyy/MM/dd', this.locale),
    cellEditor: 'dateEditor'
  }
]

rowData: any[] | null
  constructor(private _http: HttpClient, @Inject(LOCALE_ID) public locale: string) { }
onGridReady(p: GridReadyEvent){
  this._gridAPI = p.api
  this._http.get<any[]>(this._myEditorURL)
  .subscribe(res => this.rowData =res)
}
  ngOnInit(): void {
  }
frameworkComponents = {
  dateEditor: DateEditorComponent
}
}
