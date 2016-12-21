import { combineReducers } from 'redux'
import {
	START_EDITING_COLUMN_NAME,
	CANCEL_EDITING_COLUMN_NAME,
	FINISH_EDITING_COLUMN_NAME,

	START_EDITING_TASK_NAME,
	CANCEL_EDITING_TASK_NAME,
	FINISH_EDITING_TASK_NAME,
	MOVE_TASK,
	DELETE_TASK
} from '../actions'
// const INITIAL_STATE = {
// 	"users": {
// 		"1": {
// 			"name": "João Figueiredo",
// 			"avatar_url": "asd"
// 		},
// 		"2": {
// 			"name": "Joël Bez",
// 			"avatar_url": "asd"
// 		}
// 	}
// };

import sortBy from 'lodash.sortby'

const arrayfyObject = (obj) =>
	Object.keys(obj)
		.map(id => ({
			...obj[id],
			id
		}))

export function getColumnById(columns, id) {
	return columns.find(c => c.id === id)
}

export function getColumnsWithTasks(state) {
	const columns = arrayfyObject(state.columns || {});
	const tasks = arrayfyObject(state.tasks || {});
	return sortBy(columns, 'index')
		.map(column => ({
			...column,
			tasks: tasks.filter(t => t.column === column.id)
		}));
}

// export default (state = INITIAL_STATE, action) => {
//   return state;
// }

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
}

function setAllIsEditingTo(columns, isEditingValue) {
	return arrayfyObject(columns)
		.map(c => ({
			...c,
			isEditing: isEditingValue
		}))
		.reduce((acc, curr) => {
			const { id, ...currWithoutId } = curr
			return {
				...acc,
				[id]: currWithoutId
			}
		}, {})
}

function columns (state = INITIAL_COLUMNS, { type, payload }) {
	if (type === START_EDITING_COLUMN_NAME) {
		return {
			...setAllIsEditingTo(state, false),
			[payload]: {
				...state[payload],
				isEditing: true
			}
		}
	}

	if (type === CANCEL_EDITING_COLUMN_NAME) {
		return setAllIsEditingTo(state, false);
	}

	if (type === FINISH_EDITING_COLUMN_NAME) {
		return {
			...setAllIsEditingTo(state, false),
			[payload.id]: {
				...state[payload.id],
				name: payload.name,
				isEditing: false
			}
		}
	}
	return state;
}


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
	if (type === MOVE_TASK) {
		return {
			...state,
			[payload.id]: {
				...state[payload.id],
				column: payload.column.id,
				transactions: state[payload.id].transactions.concat([
					{
						type: "move",
						from: state[payload.id].column,
						to: payload.column.id,
						date: new Date().toDateString()
					}
				])
			}
		};
	}

	if (type === DELETE_TASK) {
		const { [payload]: _, ...rest } = state;
		return rest;
	}

	if (type === START_EDITING_TASK_NAME) {
		return {
			...setAllIsEditingTo(state, false),
			[payload]: {
				...state[payload],
				isEditing: true
			}
		}
	}

	if (type === CANCEL_EDITING_TASK_NAME) {
		return setAllIsEditingTo(state, false);
	}

	if (type === FINISH_EDITING_TASK_NAME) {
		return {
			...setAllIsEditingTo(state, false),
			[payload.id]: {
				...state[payload.id],
				name: payload.name,
				isEditing: false
			}
		}
	}

	return state;
}

export default combineReducers({
	tasks,
  columns
});


const removeKeyFromObject = (obj, key) => {
	const { [key]: _, ...rest } = obj;
	return rest;
}
