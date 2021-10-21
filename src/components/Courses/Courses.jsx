import React, { useState } from 'react';

import SearchBar from './components/SearchBar/SearchBar';
import CourseCard from './components/CourseCard/CourseCard';
import Button from '../../common/Button/Button';
import {
	BUTTON_ADD_NEW_COURSE,
	mockedCoursesList,
	mockedAuthorsList,
	BUTTON_TYPE_BUTTON,
} from '../../constants';

import './courses.css';

const Courses = ({ setAddNewCourse }) => {
	const [courseList, setCourseList] = useState(mockedCoursesList);

	return (
		<>
			<section className='search-section'>
				<SearchBar
					setCourseList={setCourseList}
					mockedCoursesList={mockedCoursesList}
				/>
				<Button
					content={BUTTON_ADD_NEW_COURSE}
					type={BUTTON_TYPE_BUTTON}
					onClick={() => setAddNewCourse((toggle) => !toggle)}
				/>
			</section>
			{courseList.map((course) => {
				return (
					<CourseCard
						key={course.id}
						{...course}
						mockedAuthorsList={mockedAuthorsList}
					/>
				);
			})}
		</>
	);
};

export default Courses;
