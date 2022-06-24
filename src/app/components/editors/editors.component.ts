import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'app-editors',
  templateUrl: './editors.component.html',
  styleUrls: ['./editors.component.css']
})
export class EditorsComponent implements OnInit {
private _editorsURL = '../../../assets/sharedData/rowSelection.json'
private _gridAPI : GridApi
columnDefs : ColDef[] = [
  {
    field: 'name',
    editable: true,
    cellEditor:'agLargeTextCellEditor'

  },
  {
    field: 'course',
    editable: true,
    cellEditor: 'agPopupSelectCellEditor',
    cellEditorParams: {
      values: [
        'Angular',
        'React',
        'Vue',
        'NodeJS'
      ]
    }
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
  this._http.get<any[]>(this._editorsURL)
  .subscribe(res => this.rowData = res)
}

}
