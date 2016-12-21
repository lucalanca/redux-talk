import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

import { getColumnsWithTasks } from '../reducers'
import './Board.css';

export class Board extends Component {

	renderTask(task, column, columns, cIndex) {

		const previousButton = !task.isEditing && column.index > 0
			? <button onClick={evt => this.props.moveTask(task.id, columns[cIndex - 1])}>◀</button>
			: null
		const nextButton = !task.isEditing && column.index < columns.length - 1
			? <button onClick={evt => this.props.moveTask(task.id, columns[cIndex + 1])}>▶</button>
			: null


		const deleteButton = !task.isEditing && <button onClick={evt => this.props.deleteTask(task.id)}>🗑</button>

		return (
			<div className="board__task" key={`t-${task.id}`}>
				{this.renderTaskHeader(task)}
				{previousButton}
				{nextButton}
				{deleteButton}
			</div>
		)
	}

	renderTaskHeader(task) {
		if (task.isEditing) {
			return (
				<form className="board__task-name" onSubmit={evt => { evt.preventDefault(); this.props.finishEditingTaskName(task.id, this.taskNameInput.value); }}>
					<input type="text" className="board__task-name-field" ref={(input) => { this.taskNameInput = input; input && input.focus(); }} defaultValue={task.name}/>
					<button type="submit" className="board__task-name-button">✔</button>
					<button type="button" className="board__task-name-button" onClick={evt => this.props.cancelEditingTaskName(task.id)}>×</button>
				</form>
			)
		}
		return (
			<button className="board__task-name" onClick={evt => this.props.startEditingTaskName(task.id)}>{task.name}</button>
		)
	}

	renderColumnHeader(column) {
		if (column.isEditing) {
			return (
				<form className="board__title" onSubmit={evt => { evt.preventDefault(); this.props.finishEditingColumnName(column.id, this.columnNameInput.value); }}>
					<input type="text" className="board__title-field" ref={(input) => { this.columnNameInput = input; input && input.focus(); }} defaultValue={column.name}/>
					<button type="submit" className="board__title-button">✔</button>
					<button type="button" className="board__title-button"  onClick={evt => this.props.cancelEditingColumnName(column.id)}>✖</button>
				</form>
			)
		}
		return (
			<button type="button" className="board__title" onClick={evt => this.props.startEditingColumnName(column.id)}>{column.name}</button>
		)
	}

	renderColumns() {
		return this.props.columnsWithTasks.map((c, cIndex) =>
			<div className="board__column" key={`c-${c.id}`}>
				{this.renderColumnHeader(c)}
				<div className="board__tasks">
					{c.tasks.map(t => this.renderTask(t, c, this.props.columnsWithTasks, cIndex))}
				</div>
			</div>
		)
	}

  render() {
    return (
      <div>
		  	<h1>Scrumb Board</h1>
				<div className="board">
					{this.renderColumns()}
				</div>
		  </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
	...state,
	columnsWithTasks: getColumnsWithTasks(state)
})

export default connect(mapStateToProps, actions)(Board)
