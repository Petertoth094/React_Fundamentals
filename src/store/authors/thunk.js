import { getAuthor, saveNewAuthor } from './actionCreators';
import * as constants from '../../constants';

export const fetchAuthors = async (dispatch, getState) => {
	try {
		const response = await fetch(
			`${constants.URL}${constants.URL_GET_AUTHORS_ALL}`
		);
		const result = await response.json();
		if (result?.successful) {
			dispatch(getAuthor(result.result));
		} else {
			console.log('Something is wrong with authorsFetch');
		}
	} catch (error) {
		console.log('Authors Fetch error', error);
	}
};

export const postNewAuthor = (author) => {
	return async function postNewAuthorThunk(dispatch, getState) {
		try {
			const token = getState()?.user?.token;
			const response = await fetch(
				`${constants.URL}${constants.URL_POST_AUTHORS}`,
				{
					method: 'POST',
					body: JSON.stringify(author),
					headers: {
						Authorization: token,
						'Content-Type': 'application/json',
					},
				}
			);
			const result = await response.json();
			if (result?.successful) {
				dispatch(saveNewAuthor(result.result));
			} else {
				console.log('postNewAuthor error');
			}
		} catch (error) {
			console.log(error);
		}
	};
};
