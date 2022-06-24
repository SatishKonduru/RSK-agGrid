import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColDef, GridApi, GridReadyEvent, SelectionChangedEvent } from 'ag-grid-community';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-row-pinning',
  templateUrl: './row-pinning.component.html',
  styleUrls: ['./row-pinning.component.css']
})
export class RowPinningComponent implements OnInit {
private _rowPinURL ='../../../assets/sharedData/rowSelection.json'

private _gridAPI : GridApi
pinnedTopRowData = new Subject<Array<{[key: string] : string | number | object}>>()
columnDefs: ColDef[] = [
  {
    field: 'name',
    checkboxSelection: true
  },
  {
    field: 'course'
  },
  {
    field: 'age'
  }
]
rowData: any[] | null
  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
  }
onGridReady(p: GridReadyEvent){
  this._gridAPI = p.api
  this._http.get<any[]>(this._rowPinURL)
  .subscribe(res => this.rowData = res)
}

onSelectionChanged(p: SelectionChangedEvent){
  const selectedRows = p.api.getSelectedRows()
  this.pinnedTopRowData.next(selectedRows)
  p.api.setPinnedBottomRowData(selectedRows)
}

}
