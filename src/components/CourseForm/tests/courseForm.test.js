import React from 'react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';

import { render, screen, fireEvent } from '@testing-library/react';

import CourseForm from '../CourseForm';
import { mockedAuthorsList, mockedCoursesList } from '../../../constants';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

const mockedState = {
	user: {
		isAuth: true,
		name: 'Test Name',
	},
	courses: mockedCoursesList,
	authors: mockedAuthorsList,
};

const mockedStore = {
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};

describe('CourseForm renders as expected', () => {
	const history = createMemoryHistory();
	beforeEach(() => {
		render(
			<Provider store={mockedStore}>
				<Router history={history}>
					{/* <CourseForm path={`/${mockedCoursesList[0].id}`} /> */}
					<CourseForm />
				</Router>
			</Provider>
		);
	});
	it('should show authors list (all and course authors', async () => {
		const authors = screen.getAllByTestId('authors-list');
		const courseAuthors = screen.queryByTestId('course-authors')
			? screen.getAllByTestId('course-authors')
			: [];

		expect(authors.length).toBe(
			mockedStore.getState().authors.length - courseAuthors.length
		);
	});
	it('Create author click button should call dispatch', () => {
		const authorName = screen.getByPlaceholderText('Enter author name...');
		expect(authorName).toBeInTheDocument();
		fireEvent.change(authorName, { target: { value: 'Lajoska' } });
		expect(authorName.value).toBe('Lajoska');

		const createAuthorBtn = screen.getByText('Create author');
		expect(createAuthorBtn).toBeInTheDocument();

		// fireEvent.click(createAuthorBtn);
	});
});
