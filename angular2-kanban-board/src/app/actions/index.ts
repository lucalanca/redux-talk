export const RENAME_COLUMUN = 'RENAME_COLUMUN'
export const MOVE_COLUMN_BACKWARD = 'MOVE_COLUMN_BACKWARD';
export const MOVE_COLUMN_FOWARD = 'MOVE_COLUMN_FOWARD';
export const DELETE_COLUMN = 'DELETE_COLUMN';
export const ADD_COLUMN = 'ADD_COLUMN';

export const renameColumn = (id, name, userId = 'me') => ({
  type: RENAME_COLUMUN,
  payload: {id, name, userId}
})

export const moveColumnBackward = (id) => ({
  type: MOVE_COLUMN_BACKWARD,
  payload: id
})

export const moveColumnFoward = (id) => ({
  type: MOVE_COLUMN_FOWARD,
  payload: id
})

export const deleteColumn = (id) => ({
  type: DELETE_COLUMN,
  payload: id
})

export const addColumn = () => ({
  type: ADD_COLUMN
})



export const RENAME_TASK = 'RENAME_TASK'
export const MOVE_TASK = 'MOVE_TASK'
export const DELETE_TASK = 'DELETE_TASK'
export const ADD_TASK = 'ADD_TASK'

export const renameTask = (id, name, userId = 'me') => ({
  type: RENAME_TASK,
  payload: {id, name, userId}
})

export const moveTask = (id, toColumn, userId) => ({
  type: MOVE_TASK,
  payload: {id, toColumn, userId}
})

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id
})

export const addTask = (columnId) => ({
  type: ADD_TASK,
  payload: columnId
})



export const SET_CURRENT_USER = "SET_CURRENT_USER"

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user
})
