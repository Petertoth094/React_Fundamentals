import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { mockedState, mockedStore } from '../../../testing/mockedStore';

import {
	BUTTON_ADD_NEW_COURSE,
	BUTTON_CREATE_NEW_COURSE,
	mockedAuthorsList,
	mockedCoursesList,
} from '../../../constants';

import App from '../../../App';
import Courses from '../Courses';

describe('Courses component ', () => {
	mockedState.user.role = 'admin';

	it('should display amount of CourseCard equal length of courses array', () => {
		const length = mockedCoursesList.length;
		mockedState.courses = mockedCoursesList;
		mockedState.authors = mockedAuthorsList;

		render(
			<Provider store={mockedStore}>
				<Courses />
			</Provider>
		);
		const courseCard = screen.getAllByTestId('course-card-component');
		expect(courseCard.length).toEqual(length);
	});

	it('should display Empty container if courses array length is 0', () => {
		mockedState.courses = [];
		render(
			<Provider store={mockedStore}>
				<Courses />
			</Provider>
		);

		const courseCard = screen.queryAllByTestId('course-card-component');
		expect(courseCard.length).toBe(0);

		// const courseCard = screen.queryByTestId('course-card-component');
		// expect(courseCard).not.toBeInTheDocument();
	});

	it('should be showed after a click on a button "Add new course', async () => {
		const history = createMemoryHistory();
		render(
			<Provider store={mockedStore}>
				<Router history={history}>
					<App />
				</Router>
			</Provider>
		);
		const newCourseBtn = screen.getByText(BUTTON_ADD_NEW_COURSE);
		expect(newCourseBtn).toBeInTheDocument();

		userEvent.click(newCourseBtn);

		expect(history.length).toBe(2);
		expect(history.location.pathname).toBe('/courses/add');
		expect(screen.queryByText(BUTTON_CREATE_NEW_COURSE)).toBeInTheDocument();
	});
});
