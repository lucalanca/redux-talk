export const START_EDITING_COLUMN_NAME = 'START_EDITING_COLUMN_NAME'
export const CANCEL_EDITING_COLUMN_NAME = 'CANCEL_EDITING_COLUMN_NAME'
export const FINISH_EDITING_COLUMN_NAME = 'FINISH_EDITING_COLUMN_NAME'

export const startEditingColumnName = (id) => ({
  type: START_EDITING_COLUMN_NAME,
  payload: id
})

export const cancelEditingColumnName = (id) => ({
  type: CANCEL_EDITING_COLUMN_NAME,
  payload: id
})

export const finishEditingColumnName = (id, name) => ({
	type: FINISH_EDITING_COLUMN_NAME,
	payload: {id, name}
})



export const START_EDITING_TASK_NAME = 'START_EDITING_TASK_NAME'
export const CANCEL_EDITING_TASK_NAME = 'CANCEL_EDITING_TASK_NAME'
export const FINISH_EDITING_TASK_NAME = 'FINISH_EDITING_TASK_NAME'
export const MOVE_TASK = 'MOVE_TASK'
export const DELETE_TASK = 'DELETE_TASK'

export const startEditingTaskName = (id) => ({
  type: START_EDITING_TASK_NAME,
  payload: id
})

export const cancelEditingTaskName = (id) => ({
  type: CANCEL_EDITING_TASK_NAME,
  payload: id
})

export const finishEditingTaskName = (id, name) => ({
	type: FINISH_EDITING_TASK_NAME,
	payload: {id, name}
})

export const moveTask = (id, column) => ({
	type: MOVE_TASK,
	payload: {id, column}
})

export const deleteTask = (id) => ({
	type: DELETE_TASK,
	payload: id
})

