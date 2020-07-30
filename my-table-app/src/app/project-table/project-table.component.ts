import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatCheckbox, MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import { animate, state, style, transition, trigger } from '@angular/animations';



enum RowState {
  COLLAPSED = 'collapsed',
  EXPANDED = 'expanded',
}

export interface PeriodicElement {
  rowState?: RowState;
  name: string;
  position: number;
  weight: number;
  symbol: string;
  selected: boolean;
  child?: PeriodicElement[];

}

const COLUMN_DATA: PeriodicElement[] = [
  {
    rowState: RowState.COLLAPSED, position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', selected: false,
    child: [
      { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', selected: false },
      { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', selected: false },
      { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', selected: false },
      { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', selected: false },
      { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', selected: false }
    ],
  },
  {
    rowState: RowState.COLLAPSED, position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', selected: false,
    child: [
      { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', selected: false },
      { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', selected: false },
      { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', selected: false },
      { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', selected: false }
    ],
  },
  {
    rowState: RowState.COLLAPSED, position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', selected: false,
    child: [
      { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', selected: false },
      { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', selected: false },
      { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', selected: false },
    ],
  },
  {
    rowState: RowState.COLLAPSED, position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', selected: false,
    child: [
      { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', selected: false },
      { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', selected: false },
    ],
  },
  {
    rowState: RowState.COLLAPSED, position: 5, name: 'Boron', weight: 10.811, symbol: 'B', selected: false,
    child: [{ position: 5, name: 'Boron', weight: 10.811, symbol: 'B', selected: false }],
  }
];

@Component({
  selector: 'app-project-table',
  templateUrl: './project-table.component.html',
  styleUrls: ['./project-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('150ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ProjectTableComponent implements AfterViewInit{

  headerCheckBox = false;
  visibleColumns: string[] = ['rowState', 'position', 'name', 'weight', 'symbol'];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'child'];
  showTasks = false;

  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;

  dataSource = new MatTableDataSource(COLUMN_DATA);

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }
  displayChildElements(row: any) {
    row.rowState = row.rowState === RowState.COLLAPSED ? RowState.EXPANDED : RowState.COLLAPSED;
  }

  handleAllCheckboxes(checkbox: MatCheckbox) {
    this.headerCheckBox = checkbox.checked;
    const checked = checkbox.checked;
    this.dataSource.data.forEach((item) => {
      item.selected = checked;
      if (item.child) {
        item.child.forEach((value) => value.selected = checked);
      }
    });
  }

  handleAllChildCheckboxes(childCheckbox: MatCheckbox, row: any) {
    const checkedValue = childCheckbox.checked;
    if (row.child) {
      row.child.forEach((item) => item.selected = checkedValue);
    } else {
      row.selected = checkedValue;
    }
  }

  checkboxHandled(subElementCheckbox: MatCheckbox, subElementRow: any) {
    subElementRow.selected = subElementCheckbox.checked;
  }

  getSelectedData() {

    console.log('reducing the array..');
    const a = [];
    this.dataSource.data.forEach((project) => {
      if (project.selected) {
        const abc = project.child.filter((c) => {
          return c.selected;
        });
        const p = project; p.child = abc; a.push(p);
      }
    });
    console.log(a);
  }

  slideButton(e: any) {
    this.showTasks = e.checked;
  }

}
