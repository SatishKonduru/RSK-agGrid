import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'app-value-parser',
  templateUrl: './value-parser.component.html',
  styleUrls: ['./value-parser.component.css']
})
export class ValueParserComponent implements OnInit {
private _valueParserURL = '../../../assets/sharedData/rowSelection.json'
private _gridAPI : GridApi
columnDefs : ColDef[] =[
  {field:'name'},
  {field: 'course'},
  {field: 'age',
  editable: true,
  valueParser: ({newValue, oldValue})=>
    isNaN(Number(newValue)) ? oldValue: Number(newValue)

  }
]

rowData: any[] | null;

  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
  }
  onGridReady(p: GridReadyEvent){
    this._gridAPI = p.api
    this._http.get<any[]>(this._valueParserURL)
    .subscribe(res => this.rowData = res)
  }
  cellValueChanged({value}){
    console.log(typeof value)
  }
}
