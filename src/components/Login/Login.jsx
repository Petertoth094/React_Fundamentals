import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { useDispatch } from 'react-redux';

import { loginUser } from '../../store/user/thunk';

import { URL_COURSES } from '../../constants';

import './login.css';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	let history = useHistory();
	const dispatch = useDispatch();

	const login = (e) => {
		e.preventDefault();
		if (email !== '' && password.length > 0) {
			dispatch(loginUser({ email, password }, history)).then((success) =>
				success
					? history.push(URL_COURSES)
					: alert('Wrong username or password!')
			);
		} else {
			alert('Add login credentials');
		}
	};

	return (
		<div className='login-container'>
			<h2>Login</h2>
			<form className='login-form' onSubmit={login}>
				<Input
					labelText='Email'
					placeholderText='Enter email'
					name='email'
					valueHandler={email}
					onChangeHandler={setEmail}
				/>
				<Input
					labelText='Password'
					type='password'
					placeholderText='Enter password'
					name='password'
					valueHandler={password}
					onChangeHandler={setPassword}
				/>
				<Button content='Login' buttonClassName='login-button' />
			</form>
			<p>
				If you not have an account <Link to='/registration'>Registration</Link>
			</p>
		</div>
	);
};

export default Login;
