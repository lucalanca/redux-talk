import uuidV4 from 'uuid/v4'
import sortBy from 'lodash.sortby'
import {
	RENAME_COLUMN,
	MOVE_COLUMN_BACKWARD,
	MOVE_COLUMN_FOWARD,
	DELETE_COLUMN,
	ADD_COLUMN
} from '../actions'
import {
	arrayfyObject,
	removeKeyFromObject
} from './helpers'

export default function columns (state = {}, { type, payload }) {
	if (type === RENAME_COLUMN) {
		return {
			...state,
			[payload.id]: {
				...state[payload.id],
				name: payload.name
			}
		}
	}

	if (type === DELETE_COLUMN) {
		return removeKeyFromObject(state, payload);
	}

	if (type === MOVE_COLUMN_BACKWARD) {
		const thisColumn = state[payload];
		const previousColumnId = arrayfyObject(state).find(c => c.index === thisColumn.index - 1).id;
		const previousColumn = state[previousColumnId];
		return {
			...state,
			[payload]: {
				...thisColumn,
				index: thisColumn.index - 1
			},
			[previousColumnId]: {
				...previousColumn,
				index: thisColumn.index
			}
		}
	}

	if (type === MOVE_COLUMN_FOWARD) {
		const thisColumn = state[payload];
		const nextColumnId = arrayfyObject(state).find(c => c.index === thisColumn.index + 1).id;
		const nextColumn = state[nextColumnId];
		return {
			...state,
			[payload]: {
				...thisColumn,
				index: thisColumn.index + 1
			},
			[nextColumnId]: {
				...nextColumn,
				index: thisColumn.index
			}
		}
	}

	if (type === ADD_COLUMN) {
		const lastIndex = arrayfyObject(state).reduce((lastIndex, column) => Math.max(lastIndex, column.index), 0);
		return {
			...state,
			[uuidV4()]: {
				index: lastIndex + 1,
				name: "Click to change title"
			}
		}
	}

	return state;
}

export function getColumnsWithTasks(state) {
	const columns = arrayfyObject(state.columns || {});
	const tasks = arrayfyObject(state.tasks || {});
	const users = arrayfyObject(state.users || {});
	return sortBy(columns, 'index')
		.map(column => ({
			...column,
			tasks: tasks.filter(t => t.column === column.id).map(t => ({
				...t,
				assignees: users.filter(u => Object.keys(t.assignees).indexOf(u.id) !== -1)
			})),
		}));
}