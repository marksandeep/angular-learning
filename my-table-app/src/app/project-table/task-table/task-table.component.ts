import {Component, Input, OnInit} from '@angular/core';


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

const taskViewData: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', selected: false},
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', selected: false},
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', selected: false},
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', selected: false},
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', selected: false},
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', selected: false},
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', selected: false},
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', selected: false},
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', selected: false},
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', selected: false},
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', selected: false},
];


@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css']
})
export class TaskTableComponent implements OnInit {

  childTaskData: PeriodicElement[];
  @Input() taskData!: PeriodicElement[];
  @Input() taskView: boolean;

  constructor() { }

  ngOnInit() {
    // assertArray(
    //   this.taskData,
    //   'No records provided to populate Permitted Mileage table.');
    this.showRecords();
  }

  visibleColumns: string[] = ['rowState', 'position', 'name', 'weight', 'symbol'];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'child'];

  showRecords() {
    console.log(this.taskData);
    this.childTaskData = taskViewData;
  }

}
