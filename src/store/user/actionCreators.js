import * as actions from './actionTypes';

export const setLogin = (result, user) => {
	const { name, email } = user;
	window.localStorage.setItem('user', result);
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
	window.localStorage.removeItem('user');
	return {
		type: actions.LOGOUT,
	};
};

export const updateLogin = (data) => {
	return {
		type: actions.UPDATE,
		payload: {
			...data,
			token: window.localStorage.getItem('user'),
		},
	};
};
