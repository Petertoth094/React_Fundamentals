import React from 'react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import Header from '../Header';
import { mockedStore } from '../../../testing/mockedStore';

describe('Header renders logo and username', () => {
	beforeEach(() => {
		render(
			<Provider store={mockedStore}>
				<Header />
			</Provider>
		);
	});
	it('should displays the logo', () => {
		expect(screen.getByAltText('courses-app-logo')).toBeInTheDocument();
	});
	it('should render the name', () => {
		const userName = mockedStore.getState().user.name;
		expect(screen.getByText(userName)).toBeInTheDocument();
	});
});
