import * as constants from './constants';

export const fetchData = async (url) => {
	try {
		const response = await fetch(`${constants.URL}${url}`);
		const result = await response.json();
		return result;
	} catch (error) {
		console.log(error);
	}
};

export const postUser = async (user, url) => {
	try {
		const response = await fetch(`${constants.URL}${url}`, {
			method: 'POST',
			body: JSON.stringify(user),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const result = await response.json();
		return result;
	} catch (error) {
		console.log(error);
	}
};

export const DeleteUser = async (user, url) => {
	try {
		const response = await fetch(`${constants.URL}${url}`, {
			method: 'DELETE',
			// body: JSON.stringify(user.token),
			// headers: {
			// 	'Content-Type': 'application/json',
			// },
		});
		const result = await response.json();
		return result;
	} catch (error) {
		console.log(error);
	}
};

export const fetchUserTestFun = async (token) => {
	try {
		// const response = await fetch(`${constants.URL}/users/me`);
		const response = await fetch(`http://localhost:3000/users/me`, {
			method: 'GET',
			headers: {
				Authorization: token,
			},
		});
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};
