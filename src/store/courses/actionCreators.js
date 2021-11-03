import * as actions from './actionTypes';

export const getCourse = (courses) => {
	return {
		type: actions.GET_COURSES,
		payload: [...courses],
	};
};

export const deleteCourse = (id) => {
	return {
		type: actions.DELETE_COURSE,
		payload: {
			id,
		},
	};
};

export const saveNewCourse = (course) => {
	const { id, title, description, creationDate, duration, authors } = course;
	return {
		type: actions.SAVE_NEW_COURSE,
		payload: {
			id,
			title,
			description,
			creationDate,
			duration,
			authors,
		},
	};
};
