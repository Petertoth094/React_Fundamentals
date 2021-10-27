import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { mockedCoursesList, mockedAuthorsList } from '../../constants';
import { getDottedFormattedDate } from '../../helpers/dateGenerator';
import { pipeDuration } from '../../helpers/pipeDuration';

import './courseInfo.css';

const CourseInfo = () => {
	const { courseID } = useParams();
	const course = mockedCoursesList.filter(
		(mockedCourse) => mockedCourse.id === courseID
	)[0];

	return (
		<article className='course-info'>
			<Link to='/courses' className='course-link'>
				&lt; Back to courses
			</Link>
			<h2 className='course-title--center'>{course.title}</h2>
			<div className='course-info-body'>
				<section className='course-section-description'>
					<p className='course-description'>{course.description}</p>
				</section>
				<section className='course-section-info'>
					<p>
						<span className='course-section-title'>ID:</span> {course.id}
					</p>
					<p>
						<span className='course-section-title'>Duration:</span>{' '}
						{pipeDuration(course.duration) + ' hours'}
					</p>
					<p>
						<span className='course-section-title'>Created:</span>{' '}
						{getDottedFormattedDate(new Date(course.creationDate))}
					</p>
					<p>
						<span className='course-section-title course-section-title--block'>
							Authors:
						</span>
						{course.authors.map((id) => {
							const index = mockedAuthorsList.findIndex(
								(mockedAuthor) => id === mockedAuthor.id
							);
							return (
								<span className='course-section-author' key={id}>
									{mockedAuthorsList[index].name}
								</span>
							);
						})}
					</p>
				</section>
			</div>
		</article>
	);
};

export default CourseInfo;
