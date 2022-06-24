import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'app-row-height',
  templateUrl: './row-height.component.html',
  styleUrls: ['./row-height.component.css']
})
export class RowHeightComponent implements OnInit {
private _rowHeightURL = '../../../assets/sharedData/rowSelection.json'
private _GridAPI : GridApi

public columnDefs: ColDef[] = [
  {field: 'name',
  resizable: true,
  autoHeight: true,
  cellClass: 'wrapText'
},
  {field: 'course', resizable: true},
  {field: 'age', resizable: true}
]
rowData: any[] | null;
  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
  }
  onGridReady(p: GridReadyEvent){
    this._GridAPI = p.api
    this._http.get<any[]>(this._rowHeightURL)
    .subscribe(res => this.rowData = res)
  }

  // getRowHeight({data}): number{
  //   if(data.name.length > 5){
  //     return 50;
  //   }
  //   else{
  //     return 25
  //   }
  // }

}
