import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import 'rxjs/add/operator/map';

import * as actionCreators from '../common-kanban-redux/actions';
import { getColumnsWithTasks } from '../common-kanban-redux/reducers/columns';


// @Input() task;
// @Input() hasBackwardButton: boolean = false;
// @Input() hasFowardButton: boolean = false;
//
// @Output() onMoveTaskFoward = new EventEmitter();
// @Output() onMoveTaskBackward = new EventEmitter();
// @Output() onDeleteTask = new EventEmitter();
// @Output() onTaskNameChange = new EventEmitter();
@Component({
  selector: 'app-board',
  template: `
    <column
      *ngFor="let column of columns"
      [column]="column"
      [hasBackwardButton]="column.index > 0"
      [hasFowardButton]="column.index < columns.length - 1"
      (onMoveColumnBackward)="this.store.dispatch(actions.moveColumnBackward(column.id))"
      (onMoveColumnFoward)="this.store.dispatch(actions.moveColumnFoward(column.id))"
      (onDeleteColumn)="this.store.dispatch(actions.deleteColumn(column.id))"
      (onAddTask)="this.store.dispatch(actions.addTask(column.id))"
      (onColumnNameChange)="this.store.dispatch(actions.renameColumn(column.id, $event))">
      <task *ngFor="let t of column.tasks"
            [task]="t"
            [hasBackwardButton]="column.index > 0"
            [hasFowardButton]="column.index < columns.length - 1"
            (onMoveTaskBackward)="this.store.dispatch(actions.moveTask(t.id, columns[column.index - 1]))"
            (onMoveTaskFoward)="this.store.dispatch(actions.moveTask(t.id, columns[column.index + 1]))"
            (onDeleteTask)="this.store.dispatch(actions.deleteTask(t.id))"
            (onTaskNameChange)="this.store.dispatch(actions.renameTask(t.id, $event))"
      ></task>
    </column>
    <button type="button"
            class="board__add-column button-icon"
            (click)="this.store.dispatch(actions.addColumn())">+</button>
  `
})
export class BoardComponent {
  columns = [];
  user;
  store: Store<any>;
  actions = actionCreators;


  constructor(store: Store<any>){
    this.store = store;
    store.subscribe(state => {
      this.user = 'foo';
    this.columns  = getColumnsWithTasks(state)
  });
  }
}
