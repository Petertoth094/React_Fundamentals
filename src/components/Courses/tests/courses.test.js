import React from 'react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Courses from '../Courses';
import {
	BUTTON_CREATE_NEW_COURSE,
	mockedCoursesList,
} from '../../../constants';

import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

const mockedState = {
	user: {
		isAuth: true,
		name: 'Test Name',
	},
	courses: [],
	authors: [],
};

const mockedStore = {
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};

beforeEach(() => {
	mockedStore.getState().courses = [];
	mockedStore.getState().authors = [];
});

it('should display amount of CourseCard equal length of courses array', async () => {
	const length = mockedCoursesList.length;
	mockedStore.getState().courses = mockedCoursesList;

	const wrapper = render(
		<Provider store={mockedStore}>
			<Courses />
		</Provider>
	);

	const courseCard = wrapper.getAllByTestId('course-title');
	expect(courseCard.length).toEqual(length);
});

it('should display Empty container if courses array length is 0', async () => {
	render(
		<Provider store={mockedStore}>
			<Courses />
		</Provider>
	);

	const child = screen.queryByTestId('course-card-component');
	expect(child).not.toBeInTheDocument();
});

it('CourseForm should be showed after a click on a button "Add new course', async () => {
	const history = createMemoryHistory();
	mockedStore.getState().user.role = 'admin';
	render(
		<Provider store={mockedStore}>
			<Router history={history}>
				<Courses />
			</Router>
		</Provider>
	);
	const newCourseBtn = screen.getByText('Add new course');
	expect(newCourseBtn).toBeInTheDocument();

	userEvent.click(newCourseBtn);
	expect(history.length).toBe(2);
	expect(history.location.pathname).toBe('/courses/add');
	expect(screen.queryByText(BUTTON_CREATE_NEW_COURSE));
});
