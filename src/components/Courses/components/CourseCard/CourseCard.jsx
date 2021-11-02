import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

import Button from '../../../../common/Button/Button';
import { BUTTON_SHOW_COURSE } from '../../../../constants';
import { pipeDuration } from '../../../../helpers/pipeDuration';

import './course-card.css';

const CourseCard = ({
	id,
	title,
	description,
	creationDate,
	duration,
	authors,
	mockedAuthorsList,
}) => {
	const history = useHistory();

	const renderAuthorsFun = (authors) => {
		return authors
			.map((id) => {
				const author = mockedAuthorsList.find((author) => author.id === id);
				return author?.name;
			})
			.join(',');
	};

	const showCourse = () => {
		history.push(`/courses/${id}`);
	};

	return (
		<article className='course-card'>
			<section className='course-card-header'>
				<h2>{title}</h2>
				<p className='course-card-description'>{description}</p>
			</section>
			<section className='course-card-info'>
				<p className='card-ellipsis'>
					<span className='card-title'>Authors: </span>
					{renderAuthorsFun(authors)}
				</p>
				<p>
					<span className='card-title'>Duration: </span>
					{pipeDuration(+duration) + ' hours'}
				</p>
				<p>
					<span className='card-title'>Created: </span>
					{creationDate}
				</p>
				<Button content={BUTTON_SHOW_COURSE} onClick={showCourse} />
			</section>
		</article>
	);
};

CourseCard.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	creationDate: PropTypes.string.isRequired,
	duration: PropTypes.number.isRequired,
	authors: PropTypes.arrayOf(PropTypes.string).isRequired,
	mockedAuthorsList: PropTypes.array.isRequired,
};

export default CourseCard;
