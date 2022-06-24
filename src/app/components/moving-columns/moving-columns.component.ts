import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColDef, Column, ColumnApi, GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'app-moving-columns',
  templateUrl: './moving-columns.component.html',
  styleUrls: ['./moving-columns.component.css']
})
export class MovingColumnsComponent implements OnInit {
  private _movingColumnsURL = '../../../assets/sharedData/columnTypesData.json'
  private gridColumnApi : ColumnApi;

  public columnDefs: ColDef[] = [
    { field: 'athlete',
   //lockPosition: 'left'
    },
    { field: 'age' ,
    //suppressMovable: true
    },
    { field: 'state', resizable: true, pinned: true },
    { field: 'year' },
    { field: 'date' },
    { field: 'sport' },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
    { field: 'total',
    //lockPosition: 'right'
    },
  ];
  public defaultColDef: ColDef = {
    width: 150,
  };
  public rowData : any[];
  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
  }
  onMedalsFirst() {
    this.gridColumnApi.moveColumns(['gold', 'silver', 'bronze', 'total'], 0);
  }

  onMedalsLast() {
    this.gridColumnApi.moveColumns(['gold', 'silver', 'bronze', 'total'], 6);
  }

  onStateFirst() {
    this.gridColumnApi.moveColumn('state', 0);
  }

  onSwapFirstTwo() {
    this.gridColumnApi.moveColumnByIndex(0, 1);
  }

  onPrintColumns() {
    const cols = this.gridColumnApi.getAllGridColumns();
    const colToNameFunc = (col: Column, index: number) =>
      index + ' = ' + col.getId();
    const colNames = cols.map(colToNameFunc).join(', ');
    console.log('columns are: ' + colNames);

  }

  onGridReady(params: GridReadyEvent) {
    this.gridColumnApi = params.columnApi;

    this._http
      .get<any[]>(this._movingColumnsURL)
      .subscribe((data) => (this.rowData = data));
  }

}
