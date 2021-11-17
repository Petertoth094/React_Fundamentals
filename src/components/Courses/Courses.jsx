import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import SearchBar from './components/SearchBar/SearchBar';
import CourseCard from './components/CourseCard/CourseCard';
import Button from '../../common/Button/Button';

import { BUTTON_ADD_NEW_COURSE, BUTTON_TYPE_BUTTON } from '../../constants';

import { getCourses, getUser } from '../../store/selectors';

import { fetchUserRole } from '../../store/user/thunk';
import { fetchCourse } from '../../store/courses/thunk';
import { fetchAuthors } from '../../store/authors/thunk';

import './courses.css';

const Courses = () => {
	const localeUser = window.localStorage.getItem('user');

	const courses = useSelector(getCourses);
	const user = useSelector(getUser);

	const [courseList, setCourseList] = useState([]);

	const history = useHistory();
	const dispatch = useDispatch();

	const CourseForm = () => {
		history.push(`/courses/add`);
	};

	useEffect(() => {
		if (localeUser) {
			dispatch(fetchUserRole(localeUser));
		}
		dispatch(fetchCourse);
		dispatch(fetchAuthors);
	}, [dispatch, localeUser]);

	useEffect(() => {
		setCourseList(courses);
	}, [courses]);

	return (
		<>
			<section className='search-section'>
				<SearchBar setCourseList={setCourseList} />
				{user.role === 'admin' && (
					<Button
						content={BUTTON_ADD_NEW_COURSE}
						type={BUTTON_TYPE_BUTTON}
						onClick={CourseForm}
					/>
				)}
			</section>
			{courseList &&
				courseList.map((course) => {
					return (
						<CourseCard
							data-testid='course-card-component'
							key={course.id}
							{...course}
						/>
					);
				})}
		</>
	);
};

export default Courses;
