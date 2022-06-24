import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColDef,  GridReadyEvent, GridApi } from 'ag-grid-community';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-row-selection',
  templateUrl: './row-selection.component.html',
  styleUrls: ['./row-selection.component.css']
})
export class RowSelectionComponent implements OnInit {
private _gridApi: GridApi
public rowSelection = 'multiple';
public rowData : any[];
private _dataURL = '../../../assets/sharedData/rowSelection.json'
public mySelection = new BehaviorSubject<any>('')

columnDefs :ColDef[] = [
  {headerName: 'Name',  field: 'name', sortable: true, filter: true,
  checkboxSelection: true,
  headerCheckboxSelection: true

  },
  {headerName: 'Course', field: 'course', sortable: true},
  { field: 'age', sortable: true}
]
  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
  }
  public defaultColDef: ColDef = {
    flex: 1,
    minWidth: 100,
  }
  onSelectionChanged() {
    // const selectedRows = this._gridApi.getSelectedRows().map(row => row.name).join(', ')
    const selectedRow = this._gridApi.getSelectedRows()
    .map(row => row.name)
    this.mySelection.next(selectedRow)

  }
  onGridReady(params: GridReadyEvent) {
    this._gridApi = params.api;
    this._http.get<any[]>(this._dataURL).subscribe((data) => (this.rowData = data));
  }



}
