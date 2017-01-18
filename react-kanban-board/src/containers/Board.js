import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../common-kanban-redux/actions'
import { getColumnsWithTasks } from '../common-kanban-redux/reducers/columns'

import Column from '../components/Column'
import Task from '../components/Task'

export class Board extends Component {

  render() {
		const { currentUser, columnsWithTasks } = this.props;
    console.log('columnsWithTasks', JSON.stringify(columnsWithTasks, 0, 2));
    return (
			<div className="board">
				{ columnsWithTasks.map((column, cIndex) =>
					<Column key={`column-${column.id}`} {...column}
						onColumnNameChange={(id, name) => this.props.renameColumn(id, name, currentUser.id)}
						onMoveColumnBackward={cIndex > 0 && (() => this.props.moveColumnBackward(column.id))}
						onMoveColumnFoward={cIndex < columnsWithTasks.length - 1 && (() => this.props.moveColumnFoward(column.id))}
						onDeleteColumn={() => this.props.deleteColumn(column.id)}
            onAddTask={() => this.props.addTask(column.id)}
						>
						{column.tasks.map(task => {
							return (
								<Task {...task} key={`column-${column.id}-task-${task.id}`}
									onMoveTaskBackward={column.index > 0 && (id => this.props.moveTask(task.id, column, columnsWithTasks[cIndex - 1], currentUser.id))}
									onMoveTaskFoward={column.index < columnsWithTasks.length - 1 && (id => this.props.moveTask(task.id, column, columnsWithTasks[cIndex + 1], currentUser.id))}
									onDeleteTask={id => this.props.deleteTask(id)}
									onTaskNameChange={(id, name) => this.props.renameTask(id, name, currentUser.id)} />
							)
						})}
					</Column>
				)}
				<button type="button"
						className="board__add-column button-icon"
						onClick={()=> this.props.addColumn()}>+</button>
			</div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
	...state,
	columnsWithTasks: getColumnsWithTasks(state)
})

export default connect(mapStateToProps, actions)(Board)
