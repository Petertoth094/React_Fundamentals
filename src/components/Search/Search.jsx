import React, { useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { mockedCoursesList } from '../../utils/users';

const Search = ({ setCourseList, setAddNewCourse }) => {
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
		<div>
			<form onSubmit={handleSubmit}>
				<Input
					type='text'
					place_holder='Enter course name...'
					valueHandler={query}
					onChangeHandler={setQuery}
				/>
				<Button content='Search' type='submit' />
				{/* <Button content='Search' type='submit' onClick={handleSubmit} /> */}
			</form>
			<Button
				content='Add new course'
				type='button'
				onClick={() => setAddNewCourse((oldStateToggle) => !oldStateToggle)}
			/>
		</div>
	);
};

export default Search;
