import { v4 } from 'uuid'
import {
  RENAME_TASK,
  MOVE_TASK,
  DELETE_TASK,
  ADD_TASK
} from '../actions'
import {
  removeKeyFromObject
} from './helpers'

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

export default function tasks (state = INITIAL_TASKS, { type, payload }) {
  if (type === MOVE_TASK) {
    return Object.assign({}, state, {
      [payload.id]: Object.assign({}, state[payload.id], {
        column: payload.toColumn.id
      })
    });
  }

  if (type === DELETE_TASK) {
    return removeKeyFromObject(state, payload);
  }

  if (type === RENAME_TASK) {
    return Object.assign({}, state, {
      [payload.id]: Object.assign({}, state[payload.id], {
        name: payload.name
      })
    });
  }

  if (type === ADD_TASK) {
    return Object.assign({}, state, {
      [v4()]: {
        name: "Click to change title",
        column: payload,
        assignees: {}
      }
    });
  }

  return state;
}
