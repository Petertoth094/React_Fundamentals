import React, { useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { mockedAuthorsList, mockedCoursesList } from '../../utils/users';
import { getFormattedDate } from '../../utils/getFormattedDate';
import { v4 as uuid_v4 } from 'uuid';

const CreateCourse = ({ setAddNewCourse }) => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [authorName, setAuthorName] = useState('');
	const [duration, setDuration] = useState('');

	const [authors, setAuthors] = useState(mockedAuthorsList);
	const [courseAuthors, setCourseAuthors] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			title !== '' &&
			description.length > 1 &&
			duration !== '' &&
			courseAuthors.length !== 0
		) {
			const newCourse = {
				id: uuid_v4(),
				title,
				description,
				creationDate: getFormattedDate(new Date()),
				duration,
				authors: [...courseAuthors.map((authors) => authors.id)],
			};
			mockedCoursesList.push(newCourse);

			const AllAuthors = [...authors, ...courseAuthors];
			for (let author of AllAuthors) {
				if (!mockedAuthorsList.includes(author)) {
					mockedAuthorsList.push(author);
				}
			}
			setAddNewCourse((toggle) => !toggle);
		} else {
			alert('Please fill all fields correctly');
		}
	};

	const createAuthor = () => {
		if (authorName.length !== 0 && !mockedAuthorsList.includes(authorName)) {
			const newAuthor = {
				id: uuid_v4(),
				name: authorName,
			};
			setAuthors((oldAuthors) => {
				return [...oldAuthors, newAuthor];
			});
			setAuthorName('');
		} else {
			alert('Incorrect author name!');
		}
	};

	const addCourseAuthor = (id) => {
		const tmpAuthors = authors.filter((author) => author.id === id);
		console.log(tmpAuthors);
		setCourseAuthors((oldCouseAuthors) => [...oldCouseAuthors, ...tmpAuthors]);
		setAuthors((oldAuthors) => {
			let newOldAuthors = oldAuthors.filter((oldauth) => oldauth.id !== id);
			return [...newOldAuthors];
		});
	};

	const removeCourseAuthor = (id) => {
		const newAuthor = courseAuthors.filter(
			(courseAuthor) => courseAuthor.id === id
		);
		setAuthors((oldAuthors) => [...oldAuthors, ...newAuthor]);
		setCourseAuthors((oldCourseAuthors) => {
			const newCourseAuthors = oldCourseAuthors.filter(
				(oldAuth) => oldAuth.id !== id
			);
			return [...newCourseAuthors];
		});
	};

	const renderDuration = (duration) => {
		if (duration !== 0) {
			const min = duration % 60;
			const hour = (duration - min) / 60;
			return `${hour < 10 ? '0' + hour : hour}:${
				min < 10 ? '0' + min : min
			} hours`;
		} else {
			return '00:00 hours';
		}
	};

	return (
		<form onSubmit={handleSubmit} className='course-form'>
			<div className='course-header'>
				<Button content='Create course' className='course-btn--submit' />
				<label htmlFor='title'>Title</label>
				<Input
					place_holder='Enter title'
					name='title'
					id='title'
					required
					valueHandler={title}
					onChangeHandler={setTitle}
				/>
				<label htmlFor='description'>Description</label>
				<textarea
					name='description'
					id='description'
					minLength={2}
					placeholder='Enter description'
					required
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				></textarea>
			</div>
			<div className='course-author'>
				<h2 className='author-title'>Add author</h2>
				<label htmlFor='name'>Author name</label>
				<Input
					name='name'
					place_holder='Enter author name...'
					valueHandler={authorName}
					onChangeHandler={setAuthorName}
				/>
				<Button content='Create author' type='button' onClick={createAuthor} />
				<h2 className='author-title'>Duration</h2>
				<label htmlFor='duration'>Duration</label>
				<Input
					type='number'
					place_holder='Enter duration in minutes...'
					required={true}
					valueHandler={duration}
					onChangeHandler={setDuration}
				/>
				<p className='author-duration'>Duration: {renderDuration(+duration)}</p>
				<h2 className='author-title'>Authors</h2>
				{authors.map((author) => {
					return (
						<div key={author.id}>
							<p>{author?.name}</p>
							<Button
								content='Add author'
								type='button'
								onClick={(e) => addCourseAuthor(author.id)}
							/>
						</div>
					);
				})}
				<h2 className='author-title'>Course authors</h2>
				{courseAuthors.map((courseAuthor, index) => {
					return (
						<div key={index}>
							<p>{courseAuthor.name}</p>
							<Button
								content='Delete author'
								type='button'
								onClick={(e) => removeCourseAuthor(courseAuthor.id)}
							/>
						</div>
					);
				})}
			</div>
		</form>
	);
};

export default CreateCourse;
