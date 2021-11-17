import coursesReducer from '../courses/reducer';
import { getCourse, saveNewCourse } from '../courses/actionCreators';

import { mockedCoursesList } from '../../constants';

export const mockedState = {
	user: {
		isAuth: true,
		name: 'Test Name',
	},
	courses: [],
	authors: [],
};

export const mockedStore = {
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};

describe('coursesReducer', () => {
	it('should return the initial state', () => {
		expect(coursesReducer([], {})).toEqual([]);
	});
	it('should handle SAVE_COURSE and returns new state', () => {
		const prevState = [];
		const course = mockedCoursesList[0];
		expect(coursesReducer(prevState, saveNewCourse(course))).toEqual([course]);
	});
	it('should handle GET_COURSES and returns new state', () => {
		const prevState = [];
		expect(coursesReducer(prevState, getCourse(mockedCoursesList))).toEqual(
			mockedCoursesList
		);
	});
});
