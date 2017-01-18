const INITIAL_USERS = {
	"1": {
		"name": "João Figueiredo",
		"avatar_url": "https://s3.amazonaws.com/uifaces/faces/twitter/zeldman/128.jpg"
	},
	"2": {
		"name": "Joël Bez",
		"avatar_url": "https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg"
	},
	"3": {
		"name": "Inês João",
		"avatar_url": "https://s3.amazonaws.com/uifaces/faces/twitter/csswizardry/128.jpg"
	},
	"4": {
		"name": "Florian Schulz",
		"avatar_url": "https://s3.amazonaws.com/uifaces/faces/twitter/rem/128.jpg"
	}
};


export default function users (state = INITIAL_USERS, { type, payload }) {
	return state;
}