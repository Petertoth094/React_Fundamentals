import React, { useEffect, useState } from 'react';
import { mockedAuthorsList } from '../../utils/users';
import Button from '../Button/Button';
import './course-card.css';

const CourseCard = ({
	id,
	title,
	description,
	creationDate,
	duration,
	authors,
}) => {
	const [renderAuthors, setRenderAuthors] = useState('');

	useEffect(() => {
		const tempArray = authors.map((id) => {
			const index = mockedAuthorsList.findIndex((author) => author.id === id);
			return mockedAuthorsList[index]?.name;
		});
		setRenderAuthors(tempArray.join(','));
	}, [authors]);

	return (
		<article className='course-card'>
			<section>
				<h2>{title}</h2>
				<p>{description}</p>
			</section>
			<section>
				<p>
					<span>Authors:</span>
					{renderAuthors}
				</p>
				<p>
					<span>Duration:</span>
					{duration}
				</p>
				<p>
					<span>Created:</span>
					{creationDate}
				</p>
				<Button content='Show course' />
			</section>
		</article>
	);
};

export default CourseCard;
