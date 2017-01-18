import { SET_CURRENT_USER } from '../actions'

const INITIAL_CURRENT_USER = JSON.parse(localStorage.getItem('user')) || null;

export default function currentUser (state = INITIAL_CURRENT_USER, { type, payload }) {

	if (type === SET_CURRENT_USER) {
		localStorage.setItem('user', JSON.stringify(payload));
		return payload;
	}
	return state;
}
