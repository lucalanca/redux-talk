import React from 'react';
import cx from 'classnames';

export default ({
	children, id, name,
	onColumnNameChange,
	onMoveColumnBackward, onMoveColumnFoward, onDeleteColumn,
	onAddTask
}) => {
	let columnNameInput;

	return (
		<div className="board__column">
			<form className="board__title" onSubmit={evt => { evt.preventDefault(); onColumnNameChange(id, columnNameInput.value); columnNameInput.blur(); }}>
				<input type="text" onFocus={(evt) => evt.target.select()} className="board__title-field" ref={(input) => { columnNameInput = input; }} defaultValue={name}/>
			</form>
			<div className="board__actions">
				{onMoveColumnBackward && <button type="button" className="button-icon" onClick={onMoveColumnBackward}>◀</button>}
				{onMoveColumnFoward && <button type="button" className="button-icon" onClick={onMoveColumnFoward}>▶</button>}
				{onDeleteColumn && <button type="button" className="button-icon" onClick={onDeleteColumn}>✝</button>}
			</div>
			<div className="board__tasks">
				{ children }
			</div>
			<button className="board__add-task button-icon" onClick={(evt) => {onAddTask(evt); evt.target.blur(); }}>+</button>
		</div>
	)
}

