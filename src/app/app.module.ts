import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SortComponent } from './components/sort/sort.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { FilterComponent } from './components/filter/filter.component';
import { RowSelectionComponent } from './components/row-selection/row-selection.component';
import {HttpClientModule} from '@angular/common/http';
import { RemoteDataComponent } from './components/remote-data/remote-data.component'
import { DataServiceService } from './services/data-service.service';
import { ValueGetterComponent } from './components/value-getter/value-getter.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { UpdateRowDataComponent } from './components/update-row-data/update-row-data.component';
import { UpdateSingleRowCellDataComponent } from './components/update-single-row-cell-data/update-single-row-cell-data.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { ValueFormatterComponent } from './components/value-formatter/value-formatter.component';
import { CellRenderingComponent } from './components/cell-rendering/cell-rendering.component';
import { ColumnTypesComponent } from './components/column-types/column-types.component';
import { MovingColumnsComponent } from './components/moving-columns/moving-columns.component';
import { RowDragComponent } from './components/row-drag/row-drag.component';
import { RowPinningComponent } from './components/row-pinning/row-pinning.component';
import { RowHeightComponent } from './components/row-height/row-height.component';
import { RowStylingComponent } from './components/row-styling/row-styling.component';
import { EditorsComponent } from './components/editors/editors.component';
import { ValueParserComponent } from './components/value-parser/value-parser.component';
import { ValueSetterComponent } from './components/value-setter/value-setter.component';
import { SavingDataComponent } from './components/saving-data/saving-data.component';
import { RendererComponentsComponent } from './components/renderer-components/renderer-components.component';
import { CurrencyRendererComponent } from './components/currency-renderer/currency-renderer.component';
import { MyEditorComponent } from './components/my-editor/my-editor.component';
import { DateEditorComponent } from './components/date-editor/date-editor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyHeaderComponent } from './components/my-header/my-header.component';
import { MaterialHeaderComponent } from './components/material-header/material-header.component';



@NgModule({
  declarations: [
    AppComponent,
    SortComponent,
    FilterComponent,
    RowSelectionComponent,
    RemoteDataComponent,
    ValueGetterComponent,
    HomeComponent,
    HeaderComponent,
    DashboardComponent,
    SidenavComponent,
    UpdateRowDataComponent,
    UpdateSingleRowCellDataComponent,
    TransactionComponent,
    ValueFormatterComponent,
    CellRenderingComponent,
    ColumnTypesComponent,
    MovingColumnsComponent,
    RowDragComponent,
    RowPinningComponent,
    RowHeightComponent,
    RowStylingComponent,
    EditorsComponent,
    ValueParserComponent,
    ValueSetterComponent,
    SavingDataComponent,
    RendererComponentsComponent,
    CurrencyRendererComponent,
    MyEditorComponent,
    DateEditorComponent,
    MyHeaderComponent,
    MaterialHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
