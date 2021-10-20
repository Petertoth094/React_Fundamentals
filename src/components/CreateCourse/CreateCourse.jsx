import React, { useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { mockedAuthorsList, mockedCoursesList } from '../../utils/users';
import { v4 as uuid_v4 } from 'uuid';

const CreateCourse = ({ addNewCourse, setAddNewCourse }) => {
	const [authorName, setAuthorName] = useState('');
	const [authorList, setAuthorList] = useState(mockedAuthorsList);
	const [courseAuthors, setCourseAuthors] = useState([]);

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [duration, setDuration] = useState('');

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
			const AllAuthors = [...authorList, ...courseAuthors];
			for (let author of AllAuthors) {
				if (!mockedAuthorsList.includes(author)) {
					mockedAuthorsList.push(author);
				}
			}
			setAddNewCourse(!addNewCourse);
		} else {
			alert('Please fill all fields correctky');
		}
	};

	const updateAuthors = () => {
		if (authorName.length !== 0) {
			const newAuthor = {
				id: uuid_v4(),
				name: authorName,
			};
			setAuthorList((oldAuthors) => {
				return [...oldAuthors, newAuthor];
			});
		}
	};

	const addCourseAuthor = (e) => {
		const authorName = e.target.parentNode.firstChild.textContent;
		const tempList = authorList.filter((author) => author.name === authorName);
		setCourseAuthors((oldCourseAuthors) => [...oldCourseAuthors, ...tempList]);
		setAuthorList((oldAuthorlist) => {
			let newOldAuthors = oldAuthorlist.filter(
				(oldauth) => oldauth.name !== authorName
			);
			return [...newOldAuthors];
		});
	};

	const removeCourseAuthor = (e) => {
		const authorName = e.target.parentNode.firstChild.textContent;
		const tempList = courseAuthors.filter(
			(author) => author.name === authorName
		);
		setAuthorList((oldAuthorlist) => [...oldAuthorlist, ...tempList]);
		setCourseAuthors((oldCourseAuthors) => {
			let newOldAuthors = oldCourseAuthors.filter(
				(oldauth) => oldauth.name !== authorName
			);
			return [...newOldAuthors];
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className='course-header'>
				<label htmlFor='title'>Title</label>
				<Input
					place_holder='Enter title'
					name='title'
					id='title'
					required={true}
					valueHandler={title}
					onChangeHandler={setTitle}
				/>
				<label htmlFor='description'>Description</label>
				<textarea
					name='description'
					id='description'
					minLength='2'
					placeholder='Enter description'
					required
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				></textarea>
				<Button content='Create course' />
			</div>
			<div className='course-body'>
				<h2>Add author</h2>
				<label htmlFor='name'>Author name</label>
				<Input
					name='name'
					place_holder='Enter author name...'
					// required={true}
					valueHandler={authorName}
					onChangeHandler={setAuthorName}
				/>
				<Button content='Create author' type='button' onClick={updateAuthors} />
				<h2>Duration</h2>
				<label htmlFor='duration'>Duration</label>
				<Input
					place_holder='Enter duration in minutes...'
					required={true}
					valueHandler={duration}
					onChangeHandler={setDuration}
				/>
				<p>Duration: {(+duration / 60).toFixed(2)} hours</p>
				<h2>Authors</h2>
				{authorList.map((author) => {
					return (
						<div key={author.id}>
							<p>{author.name}</p>
							<Button
								content='Add author'
								type='button'
								onClick={addCourseAuthor}
							/>
						</div>
					);
				})}
				<h2>Course authors</h2>
				{courseAuthors.map((courseAuthor, index) => {
					return (
						<div key={index}>
							<p>{courseAuthor.name}</p>
							<Button
								content='Delete author'
								type='button'
								onClick={removeCourseAuthor}
							/>
						</div>
					);
				})}
			</div>
		</form>
	);
};

export default CreateCourse;

function getFormattedDate(date) {
	let year = date.getFullYear();
	let month = (1 + date.getMonth()).toString().padStart(2, '0');
	let day = date.getDate().toString().padStart(2, '0');

	return month + '/' + day + '/' + year;
}
