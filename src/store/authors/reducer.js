import * as actions from './actionTypes';

const authorsInitialState = [];

const authorsReducer = (state = authorsInitialState, action) => {
	switch (action.type) {
		case actions.GET_AUTHORS:
			return [...action.payload];
		case actions.SAVE_NEW_AUTHOR:
			return [...state, action.payload];
		default:
			return [...state];
	}
};

export default authorsReducer;
