import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { url } from '../../constants';

import './registration.css';

const Registration = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const history = useHistory();

	const fetchUser = async (newUser) => {
		try {
			const response = await fetch(`${url}/register`, {
				method: 'POST',
				body: JSON.stringify(newUser),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const result = await response.json();
			if (result.successful) {
				history.push('/login');
			} else {
				alert(result.errors);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const registerUser = (e) => {
		e.preventDefault();
		if (name !== '' && email !== '' && password.length > 0) {
			const newUser = {
				name,
				password,
				email,
			};
			fetchUser(newUser);
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
