import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getDottedFormattedDate } from '../../helpers/dateGenerator';
import { pipeDuration } from '../../helpers/pipeDuration';
import { getAuthors, getCourses } from '../../services';

import './courseInfo.css';

const CourseInfo = () => {
	const { courseID } = useParams();

	const courses = useSelector(getCourses);
	const authors = useSelector(getAuthors);

	const course = courses.find((course) => course?.id === courseID);

	return (
		<article className='course-info'>
			<Link to='/courses' className='course-link'>
				&lt; Back to courses
			</Link>
			{course && (
				<>
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
									const author = authors.find(
										(storeAuthor) => id === storeAuthor.id
									);
									return (
										<span className='course-section-author' key={id}>
											{author.name}
										</span>
									);
								})}
							</p>
						</section>
					</div>
				</>
			)}
		</article>
	);
};

export default CourseInfo;
