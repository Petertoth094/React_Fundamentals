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
			return {
				...state,
				isAuth: true,
				name: action.payload.name || '',
				email: action.payload.email,
				token: action.payload.token,
			};
		case actions.LOGOUT:
			return {
				...userInitialState,
			};
		case actions.UPDATE: {
			const { name, email, role, token } = action.payload;
			return {
				...state,
				isAuth: true,
				name,
				email,
				role,
				token: token,
			};
		}
		default:
			return state;
	}
};

export default userReducer;
