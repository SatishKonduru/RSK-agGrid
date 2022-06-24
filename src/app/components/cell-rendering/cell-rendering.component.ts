import { Component, OnInit } from '@angular/core';
import { ColDef, GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'app-cell-rendering',
  templateUrl: './cell-rendering.component.html',
  styleUrls: ['./cell-rendering.component.css']
})
export class CellRenderingComponent implements OnInit {


  public columnDefs: ColDef[] = [
    {
    headerName: 'Name',
    field: 'name'
   },
   {
     headerName: 'Avatar',
     field: 'avatar',
     cellRenderer: ({value}) =>
      `<img src="${value}" style= "height: 50px; width: 50px" >`

   }
  ]
  public rowData: any[] | null = [
    {name: 'RSK', avatar: '../../../assets/img/1.jpg'},
    {name: 'Renu', avatar: '../../../assets/img/2.PNG'},
    {name: 'Satish', avatar: '../../../assets/img/3.PNG'},
  ]
  public defaultColDef: ColDef = {
    flex: 1,
  };
  onGridReady(params: GridReadyEvent) {}
  constructor() { }

  ngOnInit(): void {
  }

}
