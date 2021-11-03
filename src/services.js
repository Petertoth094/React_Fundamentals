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

export const getCourses = (state) => state.courses;

export const getAuthors = (state) => state.authors;

export const getUser = (state) => state.user;
