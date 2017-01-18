import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { reducer }from './reducers';

import { AppComponent } from './app.component';
import { ColumnComponent } from './components/Column';
import { TaskComponent } from './components/Task';

@NgModule({
  declarations: [
    AppComponent
    ,  ColumnComponent
    ,  TaskComponent
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
