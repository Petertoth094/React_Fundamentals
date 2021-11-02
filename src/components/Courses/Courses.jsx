import React, { useState } from 'react';
import { useHistory } from 'react-router';

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

const Courses = () => {
	const [courseList, setCourseList] = useState(mockedCoursesList);

	const history = useHistory();

	const createCourse = () => {
		history.push(`/courses/add`);
	};

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
					onClick={createCourse}
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
