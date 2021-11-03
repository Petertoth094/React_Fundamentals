import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { URL_LOGIN, URL_REGISER } from '../../constants';

import { postUser } from '../../services';

import './registration.css';

const Registration = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const history = useHistory();

	const registerUser = (e) => {
		e.preventDefault();
		if (name !== '' && email !== '' && password.length > 0) {
			const newUser = {
				name,
				password,
				email,
			};
			postUser(newUser, URL_REGISER).then((data) => {
				if (data?.successful) {
					history.push(URL_LOGIN);
				} else {
					alert(data?.errors);
				}
			});
		} else {
			alert('Input the neccesary data');
		}
	};

	return (
		<div className='registration-container'>
			<h2>Registration</h2>
			<form className='registration-form' onSubmit={registerUser}>
				<Input
					labelText='Name'
					placeholderText='Enter name'
					name='Name'
					valueHandler={name}
					onChangeHandler={setName}
				/>
				<Input
					labelText='Email'
					type='email'
					placeholderText='Enter email'
					name='email'
					valueHandler={email}
					onChangeHandler={setEmail}
				/>
				<Input
					labelText='password'
					type='password'
					placeholderText='Enter password'
					name='password'
					valueHandler={password}
					onChangeHandler={setPassword}
				/>
				<Button content='Registration' buttonClassName='registration-button' />
			</form>
			<p>
				If you have an account you can link <Link to='/login'>Login</Link>
			</p>
		</div>
	);
};

export default Registration;
