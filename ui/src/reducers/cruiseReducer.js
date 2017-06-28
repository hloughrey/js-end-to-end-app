export default function cruiseReducer(state = [], action) {
	switch(action.type) {
	case 'SAVE_CRUISE':
		return [...state, Object.assign({}, action.cruise)];
	default:
		return state;
	}
}