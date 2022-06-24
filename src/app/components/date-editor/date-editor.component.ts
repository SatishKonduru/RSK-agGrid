import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { ICellEditorAngularComp } from 'ag-grid-angular';
import { ICellEditorParams } from 'ag-grid-community';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-date-editor',
  templateUrl: './date-editor.component.html',
  styleUrls: ['./date-editor.component.css']
})
export class DateEditorComponent implements OnInit, ICellEditorAngularComp , OnDestroy , AfterViewInit{

  private myParams: ICellEditorParams
  private myDate: Date
  dateControl = new FormControl('')
  private subscription : Subscription

  @ViewChild(MatDatepicker, {static: true}) datePicker: MatDatepicker<Date>


  agInit(params: ICellEditorParams): void {
        this.myParams = params
        this.dateControl.setValue(params.value, {emitEvent: false})
  }
getValue() {
    return this.myDate
}
ngOnDestroy(): void {
    this.subscription.unsubscribe()
}
ngAfterViewInit(): void {
  this.datePicker.open()
}

  constructor() { }

  ngOnInit(): void {
  this.subscription =  this.dateControl.valueChanges.subscribe({
      error: console.error,
      next: value=> {
        this.myDate = value
      }

    })
  }

}
