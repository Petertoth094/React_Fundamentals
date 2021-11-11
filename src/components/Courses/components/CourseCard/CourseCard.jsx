import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import { HiPencil } from 'react-icons/hi';
import { FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../../../common/Button/Button';

import { BUTTON_SHOW_COURSE } from '../../../../constants';
import { pipeDuration } from '../../../../helpers/pipeDuration';

import { getAuthors, getUser } from '../../../../store/selectors';
import { deleteCourseFun } from '../../../../store/courses/thunk';

import './course-card.css';

const CourseCard = ({
	id,
	title,
	description,
	creationDate,
	duration,
	authors: IdAuthors,
}) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const authors = useSelector(getAuthors);
	const user = useSelector(getUser);

	const handleDelCourse = () => {
		dispatch(deleteCourseFun(id, user.token));
	};

	const handleUpdateCourse = () => {
		history.push(`courses/update/${id}`);
	};

	const renderAuthorsFun = (IdAuthors) => {
		return IdAuthors.map((id) => {
			const author = authors.find((author) => author.id === id);
			return author?.name;
		}).join(',');
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
					{renderAuthorsFun(IdAuthors)}
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
				{user.role === 'admin' && (
					<>
						<Button content={<HiPencil />} onClick={handleUpdateCourse} />
						<Button content={<FaTrash />} onClick={handleDelCourse} />
					</>
				)}
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
};

export default CourseCard;
