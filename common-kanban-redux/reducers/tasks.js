import { v4 } from 'uuid'
import {
  RENAME_TASK,
  MOVE_TASK,
  DELETE_TASK,
  ADD_TASK
} from '../actions'

import {
  removeKeyFromObject
} from '../helpers';

export default function tasks (state = {}, { type, payload }) {
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
