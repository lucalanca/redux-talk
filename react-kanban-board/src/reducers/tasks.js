import uuidV4 from 'uuid/v4'
import {
	RENAME_TASK,
	MOVE_TASK,
	DELETE_TASK,
	ADD_TASK
} from '../actions'

export default function tasks (state = {}, { type, payload }) {
	if (type === MOVE_TASK) {
		return {
			...state,
			[payload.id]: {
				...state[payload.id],
				column: payload.toColumn.id
			}
		};
	}

	if (type === DELETE_TASK) {
		const { [payload]: _, ...rest } = state;
		return rest;
	}

	if (type === RENAME_TASK) {
		return {
			...state,
			[payload.id]: {
				...state[payload.id],
				name: payload.name,
			}
		}
	}

	if (type === ADD_TASK) {
		return {
			...state,
			[uuidV4()]: {
				name: "Click to change title",
				column: payload,
				assignees: {}
			}
		}
	}

	return state;
}