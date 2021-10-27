import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { url } from '../../constants';

import './login.css';

const Login = ({ history, setUser }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const fetchUser = async (login) => {
		try {
			const response = await fetch(`${url}/login`, {
				method: 'POST',
				body: JSON.stringify(login),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const result = await response.json();
			if (result?.successful) {
				const userData = {
					email: result.user.email,
					name: result.user.name,
					token: result.result,
				};
				window.localStorage.setItem('user', JSON.stringify(userData));
				setUser(userData);
				history.push('/courses');
			} else {
				alert(result.result);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const loginUser = (e) => {
		e.preventDefault();
		if (email !== '' && password.length > 0) {
			const login = {
				email,
				password,
			};
			fetchUser(login);
		} else {
			alert('Add login credentials');
		}
	};

	return (
		<div className='login-container'>
			<h2>Login</h2>
			<form className='login-form' onSubmit={loginUser}>
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

Login.propTypes = {
	history: PropTypes.object.isRequired,
	setUser: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
};

export default Login;
