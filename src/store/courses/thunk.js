import * as constants from '../../constants';
import {
	deleteCourse,
	getCourse,
	saveNewCourse,
	updateCourse,
} from './actionCreators';

export const fetchCourse = async (dispatch, getState) => {
	try {
		const response = await fetch(
			`${constants.URL}${constants.URL_GET_COURSES_ALL}`
		);
		const result = await response.json();
		if (result?.successful) {
			dispatch(getCourse(result.result));
		} else {
			console.log('Something is wrong with courseFetch');
		}
	} catch (error) {
		console.log(error);
	}
};

export const createCourse = (course, token) => {
	return async function createCourseThunk(dispatch, getState) {
		try {
			const response = await fetch(
				`${constants.URL}${constants.URL_POST_COURSE}`,
				{
					method: 'POST',
					body: JSON.stringify(course),
					headers: {
						Authorization: token,
						'Content-Type': 'application/json',
					},
				}
			);
			const result = await response.json();
			if (result?.successful) {
				dispatch(saveNewCourse(result.result));
			} else {
				console.log('Something wrong with delete course');
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const deleteCourseFun = (id, token) => {
	return async function deleteCourseFunThunk(dispatch, getState) {
		try {
			const response = await fetch(
				`${constants.URL}${constants.URL_COURSES}/${id}`,
				{
					method: 'DELETE',
					headers: {
						Authorization: token,
					},
				}
			);
			const result = await response.json();
			if (result?.successful) {
				dispatch(deleteCourse(id));
			} else {
				console.log('Something wrong with delete course');
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const updateCourseFun = (course, id, token) => {
	return async function updateCourseFunThunk(dispatch, getState) {
		try {
			const response = await fetch(
				`${constants.URL}${constants.URL_COURSES}/${id}`,
				{
					method: 'PUT',
					body: JSON.stringify(course),
					headers: {
						Authorization: token,
						'Content-Type': 'application/json',
					},
				}
			);
			const result = await response.json();
			if (result?.successful) {
				dispatch(updateCourse(result.result));
			} else {
				console.log('Something wrong with update course');
			}
		} catch (error) {
			console.log(error);
		}
	};
};
