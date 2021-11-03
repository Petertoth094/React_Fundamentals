import * as actions from './actionTypes';

export const setLogin = (result, user) => {
	const { name, email } = user;
	return {
		type: actions.LOGIN,
		payload: {
			name,
			email,
			token: result,
		},
	};
};

export const setLogout = () => {
	return {
		type: actions.LOGOUT,
	};
};
