import React from 'react';

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
	const renderAuthorsFun = (authors) => {
		return authors
			.map((id) => {
				const index = mockedAuthorsList.findIndex((author) => author.id === id);
				return mockedAuthorsList[index]?.name;
			})
			.join(',');
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
				<Button content={BUTTON_SHOW_COURSE} />
			</section>
		</article>
	);
};

export default CourseCard;
