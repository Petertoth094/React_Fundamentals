import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';

import { mockedStore, mockedState } from '../../../../../testing/mockedStore';

import CourseCard from '../CourseCard';

import { mockedCoursesList, mockedAuthorsList } from '../../../../../constants';
import { pipeDuration } from '../../../../../helpers/pipeDuration';
import { renderAuthors } from '../../../../../helpers/renderAuthors';

describe('CouseCard component tests', () => {
	mockedState.courses = mockedCoursesList;
	mockedState.authors = mockedAuthorsList;

	const card = mockedCoursesList[0];

	beforeEach(() => {
		render(
			<Provider store={mockedStore}>
				<CourseCard {...card} />
			</Provider>
		);
	});

	it('should display title', () => {
		expect(screen.getByTestId('course-title').textContent).toBe(card.title);
	});

	it('should display description', () => {
		expect(screen.getByTestId('course-description').textContent).toBe(
			card.description
		);
	});

	it('should display duration in the correct format', () => {
		const formattedDuration = pipeDuration(card.duration);
		expect(screen.getByTestId('course-duration').textContent).toBe(
			`Duration: ${formattedDuration} hours`
		);
	});

	it('should display authors list', () => {
		const authorsList = renderAuthors(
			card.authors,
			mockedStore.getState().authors
		);
		expect(screen.getByTestId('course-authors').textContent).toBe(
			`Authors: ${authorsList}`
		);
	});

	it('should display created date in the correct format', () => {
		expect(screen.getByTestId('course-creation').textContent).toBe(
			`Created: ${card.creationDate}`
		);
	});
});
