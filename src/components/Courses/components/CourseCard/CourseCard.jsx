import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import { HiPencil } from 'react-icons/hi';
import { FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../../../common/Button/Button';

import { BUTTON_SHOW_COURSE, URL_GET_AUTHORS_ALL } from '../../../../constants';
import { pipeDuration } from '../../../../helpers/pipeDuration';
import { fetchData } from '../../../../services';

import { getAuthor } from '../../../../store/authors/actionCreators';
import { deleteCourse } from '../../../../store/courses/actionCreators';
import { getAuthors } from '../../../../store/selectors';

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

	const handleDelCourse = () => {
		dispatch(deleteCourse(id));
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

	useEffect(() => {
		const getData = async () => {
			try {
				const data = await fetchData(URL_GET_AUTHORS_ALL);
				if (data?.successful) {
					dispatch(getAuthor(data.result));
				}
			} catch (error) {
				console.log('AUTHORS FETCH error');
			}
		};
		if (authors.length === 0) {
			getData();
		}
	}, [dispatch, authors]);

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
				<Button content={<HiPencil />} />
				<Button content={<FaTrash />} onClick={handleDelCourse} />
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
