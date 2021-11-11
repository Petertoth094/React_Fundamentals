import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid_v4 } from 'uuid';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import {
	BUTTON_CREATE_NEW_COURSE,
	BUTTON_CREATE_NEW_AUTHOR,
	BUTTON_ADD_AUTHOR,
	BUTTON_DELETE_AUTHOR,
	BUTTON_UPDATE_COURSE,
} from '../../constants';
import { getFormattedDate } from '../../helpers/dateGenerator';
import { pipeDuration } from '../../helpers/pipeDuration';
import { FormValidator } from '../../helpers/formValidator';

import { getAuthors, getCourses } from '../../store/selectors';
import { createCourse, updateCourseFun } from '../../store/courses/thunk';
import { postNewAuthor } from '../../store/authors/thunk';

import './courseForm.css';

const CourseForm = () => {
	const authors = useSelector(getAuthors);
	const courses = useSelector(getCourses);

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [authorName, setAuthorName] = useState('');
	const [duration, setDuration] = useState('');

	const [listOfAuthors, setListOfAuthors] = useState(authors || []);
	const [courseAuthors, setCourseAuthors] = useState([]);

	const history = useHistory();
	const { courseID } = useParams();
	const updateThisCourse = courses.find((course) => course.id === courseID);

	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		const validatorMsg = FormValidator(
			title,
			description,
			duration,
			courseAuthors
		);
		if (validatorMsg.length === 0) {
			const newCourse = {
				title,
				description,
				creationDate: courseID
					? updateThisCourse.creationDate
					: getFormattedDate(new Date()),
				duration: parseInt(duration),
				authors: [...courseAuthors.map((authors) => authors.id)],
			};
			if (courseID) {
				dispatch(updateCourseFun(newCourse, courseID));
			} else {
				dispatch(createCourse(newCourse));
			}
			history.push('/courses');
		} else {
			alert(validatorMsg);
		}
	};

	const createAuthor = () => {
		if (authorName.length !== 0) {
			const newAuthor = {
				name: authorName,
				id: uuid_v4(),
			};
			dispatch(postNewAuthor({ name: newAuthor.name }));
			setListOfAuthors((oldAuthors) => {
				return [...oldAuthors, newAuthor];
			});
			setAuthorName('');
		} else {
			alert('Incorrect author name!');
		}
	};

	const addCourseAuthor = (id) => {
		const tmpAuthors = listOfAuthors.filter((author) => author.id === id);
		setCourseAuthors((oldCouseAuthors) => [...oldCouseAuthors, ...tmpAuthors]);
		setListOfAuthors((oldAuthors) => {
			let newOldAuthors = oldAuthors.filter((oldauth) => oldauth.id !== id);
			return [...newOldAuthors];
		});
	};

	const removeCourseAuthor = (id) => {
		const newAuthor = courseAuthors.filter(
			(courseAuthor) => courseAuthor.id === id
		);
		setListOfAuthors((oldAuthors) => [...oldAuthors, ...newAuthor]);
		setCourseAuthors((oldCourseAuthors) => {
			const newCourseAuthors = oldCourseAuthors.filter(
				(oldAuth) => oldAuth.id !== id
			);
			return [...newCourseAuthors];
		});
	};

	useEffect(() => {
		if (courseID) {
			setTitle(updateThisCourse.title);
			setDescription(updateThisCourse.description);
			setDuration(updateThisCourse.duration);
			setListOfAuthors(
				authors.filter(
					(author) => !updateThisCourse.authors.includes(author.id)
				)
			);
			setCourseAuthors(
				authors.filter((author) => updateThisCourse.authors.includes(author.id))
			);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<form onSubmit={handleSubmit} className='course-form'>
			<div className='create-course-header'>
				<Input
					labelText='Title'
					placeholderText='Enter title'
					name='title'
					valueHandler={title}
					onChangeHandler={setTitle}
				/>
				<Button
					content={courseID ? BUTTON_UPDATE_COURSE : BUTTON_CREATE_NEW_COURSE}
					className='course-btn--submit'
				/>
				<label className='label' htmlFor='description'>
					Description
				</label>
				<textarea
					name='description'
					id='description'
					placeholder='Enter description'
					value={description}
					className='create-course-description--wide'
					onChange={(e) => setDescription(e.target.value)}
				></textarea>
			</div>
			<div className='create-course-body'>
				<div className='create-course-author'>
					<h2 className='author-title'>Add author</h2>
					<Input
						labelText='Author name'
						name='author_name'
						placeholderText='Enter author name...'
						valueHandler={authorName}
						onChangeHandler={setAuthorName}
					/>
					<Button
						content={BUTTON_CREATE_NEW_AUTHOR}
						type='button'
						onClick={createAuthor}
					/>
					<h2 className='author-title'>Duration</h2>
					<Input
						labelText='Duration'
						type='number'
						placeholderText='Enter duration in minutes...'
						valueHandler={duration}
						onChangeHandler={setDuration}
					/>
					<p className='author-duration'>
						Duration:{' '}
						<span className='duration--bold'>{pipeDuration(+duration)}</span>
						{' hours'}
					</p>
				</div>
				<div className='course-authors--render'>
					<h2 className='author-title'>Authors</h2>
					{listOfAuthors.length === 0 ? (
						<p className='author-title'>Author list is empty</p>
					) : (
						listOfAuthors.map((author) => {
							return (
								<div key={author.id} className='couse-authors--selectable'>
									<p>
										{author?.name}
										<Button
											content={BUTTON_ADD_AUTHOR}
											type='button'
											onClick={(e) => addCourseAuthor(author.id)}
										/>
									</p>
								</div>
							);
						})
					)}
					<h2 className='author-title'>Course authors</h2>
					{courseAuthors.length === 0 ? (
						<p className='author-title'>Author list is empty</p>
					) : (
						courseAuthors.map((courseAuthor, index) => {
							return (
								<div key={index} className='course-authors--selected'>
									<p>
										{courseAuthor.name}
										<Button
											content={BUTTON_DELETE_AUTHOR}
											type='button'
											onClick={(e) => removeCourseAuthor(courseAuthor.id)}
										/>
									</p>
								</div>
							);
						})
					)}
				</div>
			</div>
		</form>
	);
};

export default CourseForm;
