import { Component, OnInit } from '@angular/core';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-remote-data',
  templateUrl: './remote-data.component.html',
  styleUrls: ['./remote-data.component.css']
})
export class RemoteDataComponent implements OnInit {


  public rowData =[]
  public columnDefs: ColDef[] = [
    {
      headerName: "Name",
      field: 'name',
      sortable: true,
    },
    {
      headerName: "Department",
      field: 'dept',
      sortable: true,
    },
    {
      headerName: "City",
      field: 'address.city',
      sortable: true,
    },
    {
      headerName: "State",
      field: 'address.state',
      sortable: true,
    },
    {
      headerName: "PinCode",
      field: 'address.pin',
      sortable: true,
    }

  ]
  constructor(private _dataService: DataServiceService) { }

  ngOnInit() {
    this._dataService.getEmpData()
    .subscribe(res => this.rowData = res,
      err => console.log(err))
  }



}
