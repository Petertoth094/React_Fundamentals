import * as actions from './actionTypes';

const userInitialState = {
	isAuth: false,
	name: '',
	email: '',
	token: window.localStorage.getItem('user') || '',
};

const userReducer = (state = userInitialState, action) => {
	switch (action.type) {
		case actions.LOGIN:
			window.localStorage.setItem('user', JSON.stringify(action.payload.token));
			return {
				isAuth: true,
				name: action.payload.name,
				email: action.payload.email,
				token: action.payload.token,
			};
		case actions.LOGOUT:
			window.localStorage.removeItem('user');
			return {
				...userInitialState,
				token: '',
			};
		default:
			return state;
	}
};

export default userReducer;
