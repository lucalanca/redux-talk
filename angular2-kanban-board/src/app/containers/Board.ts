import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import 'rxjs/add/operator/map';

import * as actionCreators from '../common-kanban-redux/actions';
import { getColumnsWithTasks } from '../common-kanban-redux/reducers/columns';

@Component({
  selector: 'app-board',
  template: `
    <div class="board">
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
      </column>
    </div>
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
