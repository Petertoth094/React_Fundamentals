import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import SearchBar from './components/SearchBar/SearchBar';
import CourseCard from './components/CourseCard/CourseCard';
import Button from '../../common/Button/Button';

import {
	BUTTON_ADD_NEW_COURSE,
	BUTTON_TYPE_BUTTON,
	URL_GET_COURSES_ALL,
} from '../../constants';
import { fetchData, getCourses } from '../../services';

import { getCourse } from '../../store/courses/actionCreators';

import './courses.css';

const Courses = () => {
	const [courseList, setCourseList] = useState([]);
	const courses = useSelector(getCourses);

	const history = useHistory();
	const dispatch = useDispatch();

	const createCourse = () => {
		history.push(`/courses/add`);
	};

	useEffect(() => {
		const getData = async () => {
			try {
				const data = await fetchData(URL_GET_COURSES_ALL);
				if (data?.successful) {
					dispatch(getCourse(data.result));
					setCourseList(data.result);
				}
			} catch (error) {
				console.log('COURSE Fetch error');
			}
		};
		if (courses.length === 0) {
			getData();
		}
		setCourseList(courses);
	}, [dispatch, courses]);

	return (
		<>
			<section className='search-section'>
				<SearchBar setCourseList={setCourseList} />
				<Button
					content={BUTTON_ADD_NEW_COURSE}
					type={BUTTON_TYPE_BUTTON}
					onClick={createCourse}
				/>
			</section>
			{courseList &&
				courseList.map((course) => {
					return <CourseCard key={course.id} {...course} />;
				})}
		</>
	);
};

export default Courses;
