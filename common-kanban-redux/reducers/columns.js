import { v4 } from 'uuid'
import { sortBy } from 'lodash';
import {
  RENAME_COLUMUN,
  MOVE_COLUMN_BACKWARD,
  MOVE_COLUMN_FOWARD,
  DELETE_COLUMN,
  ADD_COLUMN
} from '../actions'
import {
  arrayfyObject,
  removeKeyFromObject
} from '../helpers';

export default function columns (state = {}, { type, payload }) {
  if (type === RENAME_COLUMUN) {
    return Object.assign({}, state, {
      [payload.id]: Object.assign({}, state[payload.id], {
        name: payload.name
      })
    });
  }

  if (type === DELETE_COLUMN) {
    const index = state[payload].index;
    const newState = removeKeyFromObject(state, payload);
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

  if (type === MOVE_COLUMN_BACKWARD) {
    const thisColumn = state[payload];
    const previousColumnId = arrayfyObject(state).find(c => c.index === thisColumn.index - 1).id;
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

  if (type === MOVE_COLUMN_FOWARD) {
    const thisColumn = state[payload];
    const nextColumnId = arrayfyObject(state).find(c => c.index === thisColumn.index + 1).id;
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

  if (type === ADD_COLUMN) {
    const columns = arrayfyObject(state);
    const newIndex = columns.length > 0 ? columns.reduce((lastIndex, column) => Math.max(lastIndex, column.index), 0) + 1 : 0;
    return Object.assign({}, state, {
      [v4()]: {
        index: newIndex,
        name: "Click to change title"
      }
    });
  }

  return state;
}

export function getColumnsWithTasks(state) {
  const columns = arrayfyObject(state.columns || {});
  const tasks = arrayfyObject(state.tasks || {});
  const users = arrayfyObject(state.users || {});
  return sortBy(columns, 'index')
    .map((column)=> Object.assign({}, column, {
      tasks: tasks.filter(t => t.column === column.id).map(t => Object.assign({}, t, {
        assignees: users.filter(u => Object.keys(t.assignees).indexOf(u.id) !== -1)
      }))
    }));
}
