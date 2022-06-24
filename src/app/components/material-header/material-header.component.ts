import { Component, OnInit } from '@angular/core';
import { IHeaderAngularComp } from 'ag-grid-angular';
import { IHeaderParams } from 'ag-grid-community';

@Component({
  selector: 'app-material-header',
  templateUrl: './material-header.component.html',
  styleUrls: ['./material-header.component.css']
})
export class MaterialHeaderComponent implements OnInit, IHeaderAngularComp {

  private myParams: IHeaderParams
  public myDisplayName: string
  public enableSorting : boolean

  constructor() { }
agInit(params: IHeaderParams): void {
      this.myParams = params
      this.myDisplayName = this.myParams.displayName
      this.enableSorting = this.myParams.enableSorting
}
refresh(params: IHeaderParams): boolean {
  return true
}

isSortAscending() :boolean{
  return this.myParams.column.isSortAscending()
}
isSortDescending() :boolean{
  return this.myParams.column.isSortDescending()
}
onSort(direction: "asc" | "desc", event: MouseEvent){
this.myParams.setSort(direction, event.shiftKey)

}

isSortNone(){
  return this.myParams.column.isSortNone()
}
  ngOnInit(): void {
  }

}
