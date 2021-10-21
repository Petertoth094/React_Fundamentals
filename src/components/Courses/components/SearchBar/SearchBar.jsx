import React, { useState } from 'react';
import './searchBar.css';
import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';
import { BUTTON_SEARCH } from '../../../../constants';

const SearchBar = ({ setCourseList, mockedCoursesList }) => {
	const [query, setQuery] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		const tempList = mockedCoursesList.filter((course) => {
			const regex = new RegExp(`${query}`, 'gi');
			if (regex.test(course.id) || regex.test(course.title)) {
				return true;
			}
			return false;
		});
		setCourseList(tempList);
		setQuery('');
	};

	return (
		<form onSubmit={handleSubmit} className='searchbar-form'>
			<Input
				name='query'
				type='text'
				placeholderText='Enter course name...'
				valueHandler={query}
				onChangeHandler={setQuery}
			/>
			<Button content={BUTTON_SEARCH} />
		</form>
	);
};

export default SearchBar;
