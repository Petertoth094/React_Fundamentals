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
		default:
			return [...state];
	}
};

export default coursesReducer;

// const coursesReducer = (state = coursesInitialState, action) => {
// 	switch (action.type) {
// 		case actions.GET_COURSES:
// 			return { ...state, courses: action.payload };
// 		case actions.DELETE_COURSE:
// 			return {
// 				...state,
// 				courses: state.courses.filter(
// 					(course) => course.id !== action.payload.id
// 				),
// 			};
// 		case actions.UPDATE_COURSE:
// 			return {
// 				...state,
// 				courses: [...state.courses, action.payload],
// 			};
// 		default:
// 			return { ...state };
// 	}
// };
