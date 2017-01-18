import uuidV4 from 'uuid/v4'
import sortBy from 'lodash.sortby'
import groupBy from 'lodash.groupby'

import { arrayfyObject, dateToString } from './helpers'

import { MOVE_TASK } from '../actions'

export default function transactions(state = {}, { type, payload }) {
	if (type === MOVE_TASK) {
		return Object.assign({}, state, {
			[uuidV4()]: {
				type: "move",
				from: payload.fromColumn.id,
				to: payload.toColumn.id,
				userId: payload.userId,
				date: new Date().getTime()
			}
		});
	}
	return state;
}

export function getTimeline(state) {
	const transactions = arrayfyObject(state.transactions || {});
	const tasks = arrayfyObject(state.tasks || {});
	const users = arrayfyObject(state.users || {});
	const transactionsByDate = groupBy(transactions, t => dateToString(new Date(t.date)));

	return sortBy(
		Object.keys(transactionsByDate)
			.map(day => {
					const transactions = transactionsByDate[day].map(transaction => {
						const task = tasks.find(t => t.id === transaction.task);
						const user = users.find(u => u.id === transaction.userId);
						return {
							...transaction,
							task,
							user
						}
					});
					return {day, transactions}
			})
		);
}