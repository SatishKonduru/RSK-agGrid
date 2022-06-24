import { Component, OnInit } from '@angular/core';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import {DataServiceService} from '../../services/data-service.service'
@Component({
  selector: 'app-saving-data',
  templateUrl: './saving-data.component.html',
  styleUrls: ['./saving-data.component.css']
})
export class SavingDataComponent implements OnInit {

private _gridAPI : GridApi
defaultColDef: ColDef = {
  editable: true
}
columnDefs: ColDef[] = [
  {field: 'name'},
  {field: 'dept'},
  {
    headerName: 'Street',
    field: 'address.street',
  },
  {
    headerName: 'State',
    field: 'address.state'
  },
  {
    headerName: 'Pincode',
    field: 'address.pin'
  }
 ]

 rowData: any[] | null ;

constructor(private _dataService: DataServiceService) { }
onGridReady(p: GridReadyEvent){
  this._gridAPI = p.api
  this._dataService.getData()
    .subscribe(res => this.rowData = res)
}
  ngOnInit() {}


  onCellValueChanged({data}){
    this._dataService.updateEmpData(data.id, data)
    .subscribe(res => {
      console.log(res)
    })
  }

  rowValueChanged({data}){
    this._dataService.updateEmpData(data.id, data)
    .subscribe(res => {
      console.log(res)
    })
  }

}
