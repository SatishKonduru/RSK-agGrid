import { Component, OnInit } from '@angular/core';
import { ColDef, GridApi, GridReadyEvent, RowNodeTransaction } from 'ag-grid-community';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  private gridApi : GridApi
  constructor() { }

  ngOnInit(): void {
  }

  public columnDefs: ColDef[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
    { field: 'zombies' },
    { field: 'style' },
    { field: 'clothes' }
  ];
  public defaultColDef: ColDef = {
    flex: 1

  };
  public rowData: any[] | null = [];
  public rowSelection = 'multiple';

  getRowData() {
    const gridData: any[] = [];
    this.gridApi.forEachNode(node => {
      gridData.push(node.data);
    });
    console.log('Row Data:');
    console.table(gridData);
  }

  clearData() {
    this.gridApi.setRowData([]);
  }

  addItems(addIndex: number | undefined) {
    const newItems = [
      createNewRowData(),
      createNewRowData(),
      createNewRowData(),
    ];
    const res = this.gridApi.applyTransaction({
      add: newItems,
      addIndex: addIndex,
    })!;
    printResult(res);
  }

  updateItems() {
    // update the first 2 items
    const itemsToUpdate: any[] = [];
    this.gridApi.forEachNodeAfterFilterAndSort(
      (rowNode, index) => {
      // only do first 2
      if (index >= 2) {
        return;
      }
      const data = rowNode.data;
      data.price = Math.floor(Math.random() * 20000 + 20000);
      itemsToUpdate.push(data);
    });
    const res = this.gridApi.applyTransaction({ update: itemsToUpdate })!;
    printResult(res);
  }

  onRemoveSelected() {
    const selectedData = this.gridApi.getSelectedRows();
    const res = this.gridApi.applyTransaction({ remove: selectedData })!;
    printResult(res);
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }
}

let newCount = 1;
function createNewRowData() {
  const newData = {
    make: 'Toyota ' + newCount,
    model: 'Celica ' + newCount,
    price: 35000 + newCount * 17,
    zombies: 'Headless',
    style: 'Little',
    clothes: 'Airbag',
  };
  newCount++;
  return newData;
}
function printResult(res: RowNodeTransaction) {
  console.log('---------------------------------------');
  if (res.add) {
    res.add.forEach(rowNode=>{
      console.log('Added Row Node',rowNode);
    });
  }
  if (res.remove) {
    res.remove.forEach( rowNode =>  {
      console.log('Removed Row Node', rowNode);
    });
  }
  if (res.update) {
    res.update.forEach(rowNode => {
      console.log('Updated Row Node', rowNode);
    });
  }

}
