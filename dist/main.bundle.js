webpackJsonp([0,3],{

/***/ 223:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RENAME_COLUMUN = 'RENAME_COLUMUN'
/* harmony export (immutable) */ exports["RENAME_COLUMUN"] = RENAME_COLUMUN;

const MOVE_COLUMN_BACKWARD = 'MOVE_COLUMN_BACKWARD';
/* harmony export (immutable) */ exports["MOVE_COLUMN_BACKWARD"] = MOVE_COLUMN_BACKWARD;

const MOVE_COLUMN_FOWARD = 'MOVE_COLUMN_FOWARD';
/* harmony export (immutable) */ exports["MOVE_COLUMN_FOWARD"] = MOVE_COLUMN_FOWARD;

const DELETE_COLUMN = 'DELETE_COLUMN';
/* harmony export (immutable) */ exports["DELETE_COLUMN"] = DELETE_COLUMN;

const ADD_COLUMN = 'ADD_COLUMN';
/* harmony export (immutable) */ exports["ADD_COLUMN"] = ADD_COLUMN;


const renameColumn = (id, name, userId = 'me') => ({
  type: RENAME_COLUMUN,
  payload: {id, name, userId}
})
/* harmony export (immutable) */ exports["renameColumn"] = renameColumn;


const moveColumnBackward = (id) => ({
  type: MOVE_COLUMN_BACKWARD,
  payload: id
})
/* harmony export (immutable) */ exports["moveColumnBackward"] = moveColumnBackward;


const moveColumnFoward = (id) => ({
  type: MOVE_COLUMN_FOWARD,
  payload: id
})
/* harmony export (immutable) */ exports["moveColumnFoward"] = moveColumnFoward;


const deleteColumn = (id) => ({
  type: DELETE_COLUMN,
  payload: id
})
/* harmony export (immutable) */ exports["deleteColumn"] = deleteColumn;


const addColumn = () => ({
  type: ADD_COLUMN
})
/* harmony export (immutable) */ exports["addColumn"] = addColumn;




const RENAME_TASK = 'RENAME_TASK'
/* harmony export (immutable) */ exports["RENAME_TASK"] = RENAME_TASK;

const MOVE_TASK = 'MOVE_TASK'
/* harmony export (immutable) */ exports["MOVE_TASK"] = MOVE_TASK;

const DELETE_TASK = 'DELETE_TASK'
/* harmony export (immutable) */ exports["DELETE_TASK"] = DELETE_TASK;

const ADD_TASK = 'ADD_TASK'
/* harmony export (immutable) */ exports["ADD_TASK"] = ADD_TASK;


const renameTask = (id, name, userId = 'me') => ({
  type: RENAME_TASK,
  payload: {id, name, userId}
})
/* harmony export (immutable) */ exports["renameTask"] = renameTask;


const moveTask = (id, toColumn, userId) => ({
  type: MOVE_TASK,
  payload: {id, toColumn, userId}
})
/* harmony export (immutable) */ exports["moveTask"] = moveTask;


const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id
})
/* harmony export (immutable) */ exports["deleteTask"] = deleteTask;


const addTask = (columnId) => ({
  type: ADD_TASK,
  payload: columnId
})
/* harmony export (immutable) */ exports["addTask"] = addTask;




const SET_CURRENT_USER = "SET_CURRENT_USER"
/* harmony export (immutable) */ exports["SET_CURRENT_USER"] = SET_CURRENT_USER;


const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user
})
/* harmony export (immutable) */ exports["setCurrentUser"] = setCurrentUser;



/***/ },

/***/ 353:
/***/ function(module, exports, __webpack_require__) {

"use strict";
const arrayfyObject = (obj) =>
  Object.keys(obj)
    .map(id => Object.assign({}, obj[id], { id }))
/* harmony export (immutable) */ exports["b"] = arrayfyObject;


const removeKeyFromObject = (obj, key) => {
  let res = Object.assign({}, obj)
  delete res[key]
  return res;
}
/* harmony export (immutable) */ exports["a"] = removeKeyFromObject;


const dateToString = date => `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
/* unused harmony export dateToString */



/***/ },

/***/ 354:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_uuid__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers__ = __webpack_require__(353);
/* harmony export (immutable) */ exports["a"] = columns;
/* harmony export (immutable) */ exports["b"] = getColumnsWithTasks;





const INITIAL_COLUMNS  = {
  "1": {
    "name": "Backlog",
    "index": 0
  },
  "2": {
    "name": "Todo",
    "index": 1
  },
  "3": {
    "name": "Doing",
    "index": 2
  },
  "4": {
    "name": "Done",
    "index": 3
  },
  "5": {
    "name": "Shipped",
    "index": 4
  }
};

function columns (state = INITIAL_COLUMNS, { type, payload }) {
  console.log('type', type, payload);
  if (type === __WEBPACK_IMPORTED_MODULE_2__actions__["RENAME_COLUMUN"]) {
    return Object.assign({}, state, {
      [payload.id]: Object.assign({}, state[payload.id], {
        name: payload.name
      })
    });
  }

  if (type === __WEBPACK_IMPORTED_MODULE_2__actions__["DELETE_COLUMN"]) {
    const index = state[payload].index;
    const newState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers__["a" /* removeKeyFromObject */])(state, payload);
    return Object.keys(newState)
      .reduce((acc, currentId) => {
        const curr = newState[currentId];
        if (curr.index > index) {
          return Object.assign({}, acc, {
            [currentId]: Object.assign({}, curr, {
              index: curr.index - 1
            })
          });
        };
        return Object.assign({}, acc, {
          [currentId]: curr
        });
      }, {})
  }

  if (type === __WEBPACK_IMPORTED_MODULE_2__actions__["MOVE_COLUMN_BACKWARD"]) {
    const thisColumn = state[payload];
    const previousColumnId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers__["b" /* arrayfyObject */])(state).find(c => c.index === thisColumn.index - 1).id;
    const previousColumn = state[previousColumnId];
    return Object.assign({}, state, {
      [payload]: Object.assign({}, thisColumn, {
        index: thisColumn.index - 1
      }),
      [previousColumnId]: Object.assign({}, previousColumn, {
        index: thisColumn.index
      })
    });
  }

  if (type === __WEBPACK_IMPORTED_MODULE_2__actions__["MOVE_COLUMN_FOWARD"]) {
    const thisColumn = state[payload];
    const nextColumnId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers__["b" /* arrayfyObject */])(state).find(c => c.index === thisColumn.index + 1).id;
    const nextColumn = state[nextColumnId];
    return Object.assign({}, state, {
      [payload]: Object.assign({}, thisColumn, {
        index: thisColumn.index + 1
      }),
      [nextColumnId]: Object.assign({}, nextColumn, {
        index: thisColumn.index
      })
    });
  }

  if (type === __WEBPACK_IMPORTED_MODULE_2__actions__["ADD_COLUMN"]) {
    const lastIndex = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers__["b" /* arrayfyObject */])(state).reduce((lastIndex, column) => Math.max(lastIndex, column.index), 0);
    return Object.assign({}, state, {
      [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_uuid__["v4"])()]: {
        index: lastIndex + 1,
        name: "Click to change title"
      }
    });
  }

  return state;
}

function getColumnsWithTasks(state) {
  const columns = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers__["b" /* arrayfyObject */])(state.columns || {});
  const tasks = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers__["b" /* arrayfyObject */])(state.tasks || {});
  const users = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers__["b" /* arrayfyObject */])(state.users || {});
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_lodash__["sortBy"])(columns, 'index')
    .map((column)=> Object.assign({}, column, {
      tasks: tasks.filter(t => t.column === column.id).map(t => Object.assign({}, t, {
        assignees: users.filter(u => Object.keys(t.assignees).indexOf(u.id) !== -1)
      }))
    }));
}


/***/ },

/***/ 358:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 358;


/***/ },

/***/ 359:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(475);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/joaofigueiredo/code/personal/redux-talk/angular2-kanban-board/src/main.js.map

/***/ },

/***/ 474:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: "<app-board></app-board>"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/joaofigueiredo/code/personal/redux-talk/angular2-kanban-board/src/app.component.js.map

/***/ },

/***/ 475:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngrx_store_freeze__ = __webpack_require__(634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngrx_store_freeze___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ngrx_store_freeze__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_core_compose__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_core_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__ngrx_core_compose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_kanban_redux_reducers_columns__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_kanban_redux_reducers_tasks__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_Column__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_Task__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__containers_Board__ = __webpack_require__(478);
/* unused harmony export reducer */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











function reducer(state, action) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__ngrx_core_compose__["compose"])(__WEBPACK_IMPORTED_MODULE_5_ngrx_store_freeze__["storeFreeze"], __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["a" /* combineReducers */])({
        columns: __WEBPACK_IMPORTED_MODULE_7__common_kanban_redux_reducers_columns__["a" /* default */], tasks: __WEBPACK_IMPORTED_MODULE_8__common_kanban_redux_reducers_tasks__["a" /* default */]
    })(state, action);
}
;




var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_Column__["a" /* ColumnComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_Task__["a" /* TaskComponent */],
                __WEBPACK_IMPORTED_MODULE_12__containers_Board__["a" /* BoardComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["b" /* StoreModule */].provideStore(reducer)
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/joaofigueiredo/code/personal/redux-talk/angular2-kanban-board/src/app.module.js.map

/***/ },

/***/ 476:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ColumnComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ColumnComponent = (function () {
    function ColumnComponent() {
        this.hasBackwardButton = false;
        this.hasFowardButton = false;
        this.onColumnNameChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* EventEmitter */]();
        this.onMoveColumnBackward = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* EventEmitter */]();
        this.onMoveColumnFoward = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* EventEmitter */]();
        this.onDeleteColumn = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* EventEmitter */]();
        this.onAddTask = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* EventEmitter */]();
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(), 
        __metadata('design:type', Object)
    ], ColumnComponent.prototype, "column", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(), 
        __metadata('design:type', Boolean)
    ], ColumnComponent.prototype, "hasBackwardButton", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(), 
        __metadata('design:type', Boolean)
    ], ColumnComponent.prototype, "hasFowardButton", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Output */])(), 
        __metadata('design:type', Object)
    ], ColumnComponent.prototype, "onColumnNameChange", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Output */])(), 
        __metadata('design:type', Object)
    ], ColumnComponent.prototype, "onMoveColumnBackward", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Output */])(), 
        __metadata('design:type', Object)
    ], ColumnComponent.prototype, "onMoveColumnFoward", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Output */])(), 
        __metadata('design:type', Object)
    ], ColumnComponent.prototype, "onDeleteColumn", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Output */])(), 
        __metadata('design:type', Object)
    ], ColumnComponent.prototype, "onAddTask", void 0);
    ColumnComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'column',
            template: "\n    <div class=\"board__column\">\n      <form class=\"board__title\" (submit)=\"onColumnNameChange.emit('foo')\">\n        <input  type=\"text\"  class=\"board__title-field\"  (focus)=\"$event.target.select()\" [value]=\"column.name\" />\n      </form>\n      <div class=\"board__actions\">\n        <button type=\"button\" *ngIf=\"hasBackwardButton\" class=\"button-icon\" (click)=\"onMoveColumnBackward.emit()\">\u25C0</button>\n        <button type=\"button\" *ngIf=\"hasFowardButton\" class=\"button-icon\" (click)=\"onMoveColumnFoward.emit()\">\u25B6</button>\n        <button type=\"button\" class=\"button-icon\" (click)=\"onDeleteColumn.emit()\">\u271D</button>\n      </div>\n      <div class=\"board__tasks\">\n        <ng-content></ng-content>\n      </div>\n      <button class=\"board__add-task button-icon\" (click)=\"onAddTask.emit()\">+</button>\n    </div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], ColumnComponent);
    return ColumnComponent;
}());
//# sourceMappingURL=/Users/joaofigueiredo/code/personal/redux-talk/angular2-kanban-board/src/Column.js.map

/***/ },

/***/ 477:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TaskComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TaskComponent = (function () {
    function TaskComponent() {
        this.hasBackwardButton = false;
        this.hasFowardButton = false;
        this.onMoveTaskFoward = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* EventEmitter */]();
        this.onMoveTaskBackward = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* EventEmitter */]();
        this.onDeleteTask = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* EventEmitter */]();
        this.onTaskNameChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* EventEmitter */]();
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(), 
        __metadata('design:type', Object)
    ], TaskComponent.prototype, "task", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(), 
        __metadata('design:type', Boolean)
    ], TaskComponent.prototype, "hasBackwardButton", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(), 
        __metadata('design:type', Boolean)
    ], TaskComponent.prototype, "hasFowardButton", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Output */])(), 
        __metadata('design:type', Object)
    ], TaskComponent.prototype, "onMoveTaskFoward", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Output */])(), 
        __metadata('design:type', Object)
    ], TaskComponent.prototype, "onMoveTaskBackward", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Output */])(), 
        __metadata('design:type', Object)
    ], TaskComponent.prototype, "onDeleteTask", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Output */])(), 
        __metadata('design:type', Object)
    ], TaskComponent.prototype, "onTaskNameChange", void 0);
    TaskComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'task',
            template: "\n    <div class=\"board__task\">\n      <div class=\"board__task-header\">\n        <form class=\"board__task-name\" (submit)=\"onTaskNameChange.emit('foo')\">\n          <input type=\"text\" class=\"board__task-name-field\" [value]=\"task.name\" (focus)=\"$event.target.select()\">\n        </form>\n      </div>\n      <div class=\"board__task-actions\">\n        <button *ngIf=\"hasBackwardButton\" class=\"button-icon\" (click)=\"onMoveTaskBackward.emit()\">\u25C0</button>\n        <button *ngIf=\"hasFowardButton\" class=\"button-icon\" (click)=\"onMoveTaskFoward.emit()\">\u25B6</button>\n        <button class=\"button-icon\" (click)=\"onDeleteTask.emit()\">\u271D</button>\n      </div>\n      <div class=\"board__task-footer\"></div>\n    </div>\n\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], TaskComponent);
    return TaskComponent;
}());
//# sourceMappingURL=/Users/joaofigueiredo/code/personal/redux-talk/angular2-kanban-board/src/Task.js.map

/***/ },

/***/ 478:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_kanban_redux_actions__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_kanban_redux_reducers_columns__ = __webpack_require__(354);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BoardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BoardComponent = (function () {
    function BoardComponent(store) {
        var _this = this;
        this.columns = [];
        this.actions = __WEBPACK_IMPORTED_MODULE_3__common_kanban_redux_actions__;
        this.store = store;
        store.subscribe(function (state) {
            _this.user = 'foo';
            _this.columns = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__common_kanban_redux_reducers_columns__["b" /* getColumnsWithTasks */])(state);
        });
    }
    BoardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-board',
            template: "\n    <div class=\"board\">\n      <column\n        *ngFor=\"let column of columns\"\n        [column]=\"column\"\n        [hasBackwardButton]=\"column.index > 0\"\n        [hasFowardButton]=\"column.index < columns.length - 1\"\n        (onMoveColumnBackward)=\"this.store.dispatch(actions.moveColumnBackward(column.id))\"\n        (onMoveColumnFoward)=\"this.store.dispatch(actions.moveColumnFoward(column.id))\"\n        (onDeleteColumn)=\"this.store.dispatch(actions.deleteColumn(column.id))\"\n        (onAddTask)=\"this.store.dispatch(actions.addTask(column.id))\"\n        (onColumnNameChange)=\"this.store.dispatch(actions.renameColumn(column.id, $event))\">\n      </column>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["c" /* Store */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["c" /* Store */]) === 'function' && _a) || Object])
    ], BoardComponent);
    return BoardComponent;
    var _a;
}());
//# sourceMappingURL=/Users/joaofigueiredo/code/personal/redux-talk/angular2-kanban-board/src/Board.js.map

/***/ },

/***/ 479:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/joaofigueiredo/code/personal/redux-talk/angular2-kanban-board/src/environment.js.map

/***/ },

/***/ 480:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/joaofigueiredo/code/personal/redux-talk/angular2-kanban-board/src/polyfills.js.map

/***/ },

/***/ 661:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_uuid__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers__ = __webpack_require__(353);
/* harmony export (immutable) */ exports["a"] = tasks;





const INITIAL_TASKS = {
  "1": {
    "name": "Task 1",
    "column": "2",
    "isEditing": false,
    "transactions": [
      {
        "type": "create",
        "date": "20/12/2016"
      },
      {
        "type": "move",
        "from": "1",
        "to": "2",
        "date": "20/12/2016"
      }
    ]
  },
  "2": {
    "name": "Task 2",
    "column": "1",
    "isEditing": false,
    "transactions": [
      {
        "type": "create",
        "date": "20/12/2016"
      }
    ]
  },
  "3": {
    "name": "Task 3",
    "column": "1",
    "isEditing": false,
    "transactions": [
      {
        "type": "create",
        "date": "20/12/2016"
      }
    ]
  },
  "4": {
    "name": "Task 4",
    "column": "3",
    "isEditing": false,
    "transactions": [
      {
        "type": "create",
        "date": "20/12/2016"
      }
    ]
  },
  "5": {
    "name": "Task 5",
    "column": "4",
    "isEditing": false,
    "transactions": [
      {
        "type": "create",
        "date": "20/12/2016"
      }
    ]
  },
  "6": {
    "name": "Task 6",
    "column": "5",
    "isEditing": false,
    "transactions": [
      {
        "type": "create",
        "date": "20/12/2016"
      }
    ]
  }
};

function tasks (state = INITIAL_TASKS, { type, payload }) {
  if (type === __WEBPACK_IMPORTED_MODULE_1__actions__["MOVE_TASK"]) {
    return Object.assign({}, state, {
      [payload.id]: Object.assign({}, state[payload.id], {
        column: payload.toColumn.id
      })
    });
  }

  if (type === __WEBPACK_IMPORTED_MODULE_1__actions__["DELETE_TASK"]) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__helpers__["a" /* removeKeyFromObject */])(state, payload);
  }

  if (type === __WEBPACK_IMPORTED_MODULE_1__actions__["RENAME_TASK"]) {
    return Object.assign({}, state, {
      [payload.id]: Object.assign({}, state[payload.id], {
        name: payload.name
      })
    });
  }

  if (type === __WEBPACK_IMPORTED_MODULE_1__actions__["ADD_TASK"]) {
    return Object.assign({}, state, {
      [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_uuid__["v4"])()]: {
        name: "Click to change title",
        column: payload,
        assignees: {}
      }
    });
  }

  return state;
}


/***/ },

/***/ 666:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(359);


/***/ }

},[666]);
//# sourceMappingURL=main.bundle.map