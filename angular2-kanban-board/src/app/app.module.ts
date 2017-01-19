import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';


import { combineReducers } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { compose } from '@ngrx/core/compose';

import columns from './common-kanban-redux/reducers/columns';
import tasks from './common-kanban-redux/reducers/tasks';

export function reducer(state: any, action: any) {
  return compose(storeFreeze, combineReducers)({
    columns, tasks
  })(state, action);
};


import { AppComponent } from './app.component';
import { ColumnComponent } from './components/Column';
import { TaskComponent } from './components/Task';
import { BoardComponent } from './containers/Board';

@NgModule({
  declarations: [
    AppComponent,
    ColumnComponent,
    TaskComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    StoreModule.provideStore(reducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
