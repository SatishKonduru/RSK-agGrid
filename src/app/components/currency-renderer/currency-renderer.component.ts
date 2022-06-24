import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-currency-renderer',
  templateUrl: './currency-renderer.component.html',
  styleUrls: ['./currency-renderer.component.css']
})
export class CurrencyRendererComponent implements OnInit, ICellRendererAngularComp {

  myValue : any
  agInit(params: ICellRendererParams): void {
      this.myValue = params.value
  }
  refresh(params: ICellRendererParams): boolean {
      // return false
      //** To Destroy and recreate the component on value changes use the following code */
      this.myValue = params.value
      return true
  }
  constructor() { }

  ngOnInit(): void {
  }

}
