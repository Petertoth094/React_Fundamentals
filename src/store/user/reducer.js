import * as actions from './actionTypes';

export const userInitialState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
	role: '',
};

const userReducer = (state = userInitialState, action) => {
	switch (action.type) {
		case actions.LOGIN:
			window.localStorage.setItem('user', action.payload.token);
			return {
				...state,
				isAuth: true,
				name: action.payload.name || '',
				email: action.payload.email,
				token: action.payload.token,
			};
		case actions.LOGOUT:
			window.localStorage.removeItem('user');
			return {
				...userInitialState,
				token: '',
			};
		case actions.UPDATE: {
			const { name, email, role } = action.payload;
			return {
				...state,
				isAuth: true,
				name,
				email,
				role,
				token: window.localStorage.getItem('user'),
			};
		}
		default:
			return state;
	}
};

export default userReducer;
