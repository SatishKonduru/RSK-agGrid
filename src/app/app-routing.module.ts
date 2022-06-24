import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FilterComponent } from './components/filter/filter.component';
import { HomeComponent } from './components/home/home.component';
import { RemoteDataComponent } from './components/remote-data/remote-data.component';
import { RowSelectionComponent} from './components/row-selection/row-selection.component';
import { SortComponent } from './components/sort/sort.component';
import { ValueGetterComponent } from './components/value-getter/value-getter.component';
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
import { MyEditorComponent } from './components/my-editor/my-editor.component';
import { MyHeaderComponent } from './components/my-header/my-header.component';



const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path:'sidenav',
    component:SidenavComponent
  },
  {
    path:'sort',
    component: SortComponent
  },
  {
    path: 'filter',
    component: FilterComponent
  },
  {
    path:'rowSelection',
    component: RowSelectionComponent
  },
  {
    path:'remoteData',
    component: RemoteDataComponent
  },
  {
    path: 'valueGetter',
    component: ValueGetterComponent
  },
  {
    path: 'updateRowData',
    component: UpdateRowDataComponent
  },
  {
    path:'updateSingleRowCellData',
    component: UpdateSingleRowCellDataComponent
  },
  {
    path:'transaction',
    component:TransactionComponent
  },
  {
    path:'valueFormatter',
    component: ValueFormatterComponent
  },
  {
    path: 'cellRendering',
    component: CellRenderingComponent
  },
  {
    path: 'columnTypes',
    component: ColumnTypesComponent
  },
  {
    path:'movingColumns',
    component: MovingColumnsComponent
  },
  {
    path: 'rowDrag',
    component: RowDragComponent
  },
  {
    path: 'rowPinning',
    component: RowPinningComponent
  },
  {
    path: 'rowHeight',
    component: RowHeightComponent
  },
  {
    path: 'rowStyling',
    component:RowStylingComponent
  },
  {
    path: 'editors',
    component: EditorsComponent
  },
  {
    path: 'valueParser',
    component: ValueParserComponent
  },
  {
    path: 'valueSetter',
    component: ValueSetterComponent
  },
  {
    path:'savingData',
    component: SavingDataComponent
  },
  {
    path: 'rendererComponents',
    component: RendererComponentsComponent
  },
  {
    path: 'myEditor',
    component: MyEditorComponent
  },
  {
    path: 'myHeader',
    component: MyHeaderComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
