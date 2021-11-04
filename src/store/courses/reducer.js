import * as actions from './actionTypes';

const coursesInitialState = [];

const coursesReducer = (state = coursesInitialState, action) => {
	switch (action.type) {
		case actions.GET_COURSES:
			return [...action.payload];
		case actions.DELETE_COURSE:
			return [...state.filter((course) => course.id !== action.payload.id)];
		case actions.SAVE_NEW_COURSE:
			return [...state, action.payload];
		case actions.UPDATE_COURSE:
			return [
				...state.filter((course) => course.id !== action.payload.removeID),
				...action.payload.updatedCourse,
			];
		default:
			return [...state];
	}
};

export default coursesReducer;
