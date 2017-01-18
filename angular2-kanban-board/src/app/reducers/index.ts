import { combineReducers } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { compose } from '@ngrx/core/compose';

import columns from './columns';
import tasks from './tasks';

export function reducer(state: any, action: any) {
  return compose(storeFreeze, combineReducers)({
    columns, tasks
  })(state, action);
};
