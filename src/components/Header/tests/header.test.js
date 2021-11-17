import React from 'react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import Header from '../Header';

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

describe('Header renders logo and username', () => {
	it('should displays the logo', () => {
		const { getByAltText } = render(
			<Provider store={mockedStore}>
				<Header />
			</Provider>
		);
		expect(getByAltText('courses-app-logo')).toBeInTheDocument();
	});
	it('should render the name', () => {
		render(
			<Provider store={mockedStore}>
				<Header />
			</Provider>
		);
		expect(screen.queryByText('Test Name')).toBeInTheDocument();
	});
});
