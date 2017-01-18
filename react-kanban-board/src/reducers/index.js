import { combineReducers } from 'redux'
import columns from './columns'
import tasks from './tasks'
import users from './users'
import currentUser from './currentUser'
import transactions from './transactions';

export default combineReducers({
	tasks,
  columns,
	users,
	currentUser,
	transactions
});


