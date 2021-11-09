import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
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
import { fetchData } from '../../services';

import { getCourse } from '../../store/courses/actionCreators';
import { getCourses } from '../../store/selectors';

import './courses.css';

const Courses = ({ firstRender, setFirstRender }) => {
	const [courseList, setCourseList] = useState([]);
	const courses = useSelector(getCourses);

	const history = useHistory();
	const dispatch = useDispatch();

	const CourseForm = () => {
		history.push(`/courses/add`);
	};

	useEffect(() => {
		const getData = async () => {
			try {
				const data = await fetchData(URL_GET_COURSES_ALL);
				if (data?.successful) {
					dispatch(getCourse(data.result));
					setFirstRender(!firstRender);
				}
			} catch (error) {
				console.log('COURSE Fetch error');
			}
		};
		if (firstRender) {
			getData();
		}
		setCourseList(courses);
	}, [dispatch, courses, firstRender, setFirstRender]);

	return (
		<>
			<section className='search-section'>
				<SearchBar setCourseList={setCourseList} />
				<Button
					content={BUTTON_ADD_NEW_COURSE}
					type={BUTTON_TYPE_BUTTON}
					onClick={CourseForm}
				/>
			</section>
			{courseList &&
				courseList.map((course) => {
					return <CourseCard key={course.id} {...course} />;
				})}
		</>
	);
};
Courses.propTypes = {
	firstRender: PropTypes.bool.isRequired,
	setFirstRender: PropTypes.func.isRequired,
};

export default Courses;
