import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';


import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';


@Component({
  selector: 'app-value-setter',
  templateUrl: './value-setter.component.html',
  styleUrls: ['./value-setter.component.css']
})
export class ValueSetterComponent implements OnInit {
private _valueSetterURL = '../../../assets/sharedData/data.json'
private _gridAPI : GridApi
columnDefs : ColDef[] = [
  {field: 'name'},
  {field: 'dept'},
  {
    headerName: 'Address',

    editable: true,
    resizable: true,
    valueGetter: ({data}: {data}) =>
    `${data.address.street}, ${data.address.city}, ${data.address.state}, ${data.address.pin}`,
    valueSetter: ({data, newValue}: {data: Data; newValue: string}) => {
      const matches = newValue.match(/^([^,]+),\s{1}([^,]+),\s{1}([^,]+),\s{1}([0-9]{5}-?[0-9]{0,4})$/i);

      if(matches){
        data.address.street = matches[1]
        data.address.city = matches[2]
        data.address.state = matches[3]
        data.address.pin = matches[4]
      }
      return false
    }
  }
]

rowData: any[] | null;
  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
  }
  onGridReady(p: GridReadyEvent){
    this._gridAPI = p.api
    this._http.get<any[]>(this._valueSetterURL)
    .subscribe(res => this.rowData = res)
  }
}
