import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getColumnsWithTasks } from './common-kanban-redux/reducers/columns';
import 'rxjs/add/operator/map';

import * as actionCreators from './actions';

@Component({
  selector: 'app-root',
  template: `
    <div class="board">
      <column
        *ngFor="let column of columns"
        [column]="column"
        (onMoveColumnBackward)="this.store.dispatch(actions.moveColumnBackward(column.id))"
        (onMoveColumnFoward)="this.store.dispatch(actions.moveColumnFoward(column.id))"
        (onDeleteColumn)="this.store.dispatch(actions.deleteColumn(column.id))"
        (onAddTask)="this.store.dispatch(actions.addTask(column.id))"
        (onColumnNameChange)="this.store.dispatch(actions.renameColumn(column.id, $event))">
        <task
            *ngFor="let t of column.tasks"
            [task]="t"
            (onMoveTaskFoward)="this.store.dispatch(actions.moveTask(t.id, columns[column.index + 1]))"
            (onMoveTaskBackward)="this.store.dispatch(actions.moveTask(t.id, columns[column.index - 1]))"
            (onDeleteTask)="this.store.dispatch(actions.deleteTask(t.id))"
            (onTaskNameChange)="this.store.dispatch(actions.renameTask(t.id, $event))"></task>
      </column>
    </div>
  `
})
export class AppComponent {
  title = 'app works!';
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
