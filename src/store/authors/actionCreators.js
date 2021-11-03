import * as actions from './actionTypes';

export const getAuthor = (authors) => {
	return {
		type: actions.GET_AUTHORS,
		payload: [...authors],
	};
};

export const saveNewAuthor = (author) => {
	const { id, name } = author;
	return {
		type: actions.SAVE_NEW_AUTHOR,
		payload: {
			name,
			id,
		},
	};
};
