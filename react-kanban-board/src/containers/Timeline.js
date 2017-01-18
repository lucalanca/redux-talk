import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

import { getTimeline } from '../reducers/transactions'

export class Timeline extends Component {

	renderTransaction({ user, task, date, type }) {
		console.log({ user, task, date, type });
		return (
			<p>
				{user.name} {type}d {task.name} {new Date(date).toDateString()}
			</p>
		);
	}

  render() {
		const { timeline } = this.props
    return (
			<ol className="timeline">

				{ timeline.map(timelineEntry => {
					const transactions = timelineEntry.transactions;
					const day = timelineEntry.day;
					return (
						<li key={`timeline-day-${day}`}>
							<span>{day}</span>
							<ul>
								{transactions.map(transaction => {
									return (
										<li key={`timeline-day-${day}-transaction-${transaction.id}`}>
											{this.renderTransaction(transaction)}
										</li>
									)
								})}
							</ul>
						</li>
					)
				})}
			</ol>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
	...state,
	timeline: getTimeline(state)
})

export default connect(mapStateToProps, actions)(Timeline)
