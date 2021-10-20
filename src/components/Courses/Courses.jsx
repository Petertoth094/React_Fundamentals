import React, { useState } from 'react';
import Search from '../Search/Search';
import CourseCard from '../CourseCard/CourseCard';
import { mockedCoursesList } from '../../utils/users';
import './courses.css';

const Courses = ({ setAddNewCourse }) => {
	const [courseList, setCourseList] = useState(mockedCoursesList);
	return (
		<>
			<section>
				<Search
					setCourseList={setCourseList}
					setAddNewCourse={setAddNewCourse}
				/>
			</section>
			{courseList.map((course) => {
				return <CourseCard key={course.id} {...course} />;
			})}
		</>
	);
};

export default Courses;
