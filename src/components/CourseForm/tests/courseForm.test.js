import React from 'react';
import { Provider } from 'react-redux';

import { render, screen, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { mockedAuthorsList, mockedCoursesList } from '../../../constants';
import { mockedState, mockedStore } from '../../../testing/mockedStore';

import App from '../../../App';

describe('CourseForm renders as expected', () => {
	mockedState.user.role = 'admin';
	mockedState.courses = mockedCoursesList;
	mockedState.authors = mockedAuthorsList;

	const history = createMemoryHistory();

	beforeEach(() => {
		render(
			<Provider store={mockedStore}>
				<Router history={history}>
					<App />
				</Router>
			</Provider>
		);
	});
	it('should show authors list (all and course authors', async () => {
		const updateBtn = screen.getAllByTestId('course-update-btn');
		userEvent.click(updateBtn[0]);

		const authors = await screen.findAllByTestId('authors-list');
		const courseAuthors = await screen.findAllByTestId('course-authors');

		expect(authors.length).toBe(
			mockedStore.getState().authors.length - courseAuthors.length
		);
	});
	it('Create author click button should call dispatch', async () => {
		const authorName = screen.getByPlaceholderText('Enter author name...');
		expect(authorName).toBeInTheDocument();
		userEvent.type(authorName, 'Lajoska');
		// fireEvent.change(authorName, { target: { value: 'Lajoska' } });
		expect(authorName.value).toBe('Lajoska');

		const createAuthorBtn = screen.getByText('Create author');
		expect(createAuthorBtn).toBeInTheDocument();
		// fireEvent.click(createAuthorBtn);
		userEvent.click(createAuthorBtn);
		expect(mockedStore.dispatch).toHaveBeenCalled();
	});
	it('Add author button click should add an author to course authors list', async () => {
		const authors = screen.getAllByTestId('authors-list');
		expect(authors[0]).toBeInTheDocument();

		userEvent.click(authors[0].lastElementChild);
		const courseAuthors = await screen.findAllByTestId('course-authors');

		expect(courseAuthors[0]).toBeInTheDocument();
		expect(authors[0].firstChild.textContent).toBe(
			courseAuthors[courseAuthors.length - 1].firstChild.textContent
		);
	});
	it('Delete author button click should delete an author from the course list.', async () => {
		const courseAuthors = screen.getAllByTestId('course-authors');
		expect(courseAuthors.length).toBeGreaterThan(0);

		const courseAuthor = courseAuthors[0].firstChild.textContent;
		userEvent.click(courseAuthors[0].lastChild);

		const authors = await screen.findAllByTestId('authors-list');
		expect(authors.length).toBeGreaterThan(0);
		expect(authors[authors.length - 1].firstChild.textContent).toBe(
			courseAuthor
		);
	});
});
