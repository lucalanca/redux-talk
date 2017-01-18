import React from 'react';
import cx from 'classnames';

export default ({
	id, name, assignees,
	onMoveTaskFoward, onMoveTaskBackward, onDeleteTask,
	onTaskNameChange }) => {
	let taskNameInput;
	return (
		<div className="board__task">
			<div className="board__task-header">
				<form className={cx("board__task-name")} onSubmit={evt => { evt.preventDefault(); onTaskNameChange(id, taskNameInput.value); }}>
					<input type="text" className="board__task-name-field" onFocus={evt => evt.target.select()} ref={(input) => taskNameInput = input} defaultValue={name}/>
				</form>
			</div>
			<div className="board__task-actions">
				{onMoveTaskBackward && <button className="button-icon" onClick={evt => onMoveTaskBackward(id)}>◀</button>}
				{onMoveTaskFoward && <button className="button-icon" onClick={evt => onMoveTaskFoward(id)}>▶</button>}
				{onDeleteTask && <button className="button-icon" onClick={evt => onDeleteTask(id)}>✝</button>}
			</div>
			<div className="board__task-footer">
				{/*assignees.map(user =>
					<img
						key={`task-${id}-user-${user.id}`}
						className="board__task-assignee"
						src={user.avatar_url}
						alt={`${user.avatar_url}'s avatar'`} />
				)*/}
			</div>

		</div>
	)
}