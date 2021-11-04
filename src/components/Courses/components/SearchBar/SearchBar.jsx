import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';
import { BUTTON_SEARCH } from '../../../../constants';
import { getCourses } from '../../../../store/selectors';

import './searchBar.css';

const SearchBar = ({ setCourseList }) => {
	const [query, setQuery] = useState('');

	const courses = useSelector(getCourses);

	const handleSubmit = (e) => {
		e.preventDefault();
		const tempList = courses.filter((course) => {
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

SearchBar.propTypes = {
	setCourseList: PropTypes.func.isRequired,
};

export default SearchBar;
