export const RENAME_COLUMUN : string;
export const MOVE_COLUMN_BACKWARD : string;;
export const MOVE_COLUMN_FOWARD : string;
export const DELETE_COLUMN : string;
export const ADD_COLUMN : string;

interface Payload {
	type: string;
	payload: any;
};

export const renameColumn : (id: string, name: string, userId ?: string) : Payload;
export const moveColumnBackward : (id: string) : Payload;
export const moveColumnFoward  : (id: string) : Payload;
export const deleteColumn : (id: string) : Payload;
export const addColumn : (id: string) : Payload;

export const RENAME_TASK : string;
export const MOVE_TASK : string;
export const DELETE_TASK : string;
export const ADD_TASK : string;

export const renameTask : (id: string, name: string, userId ?: string) : Payload;
export const moveTask : (id: string, toColumn: any, userId ?: string) : Payload;
export const deleteTask : (id: string) : Payload;
export const addTask  : (columnId: string) : Payload;
