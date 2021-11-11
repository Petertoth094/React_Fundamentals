import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { useDispatch } from 'react-redux';

import { setLogin } from '../../store/user/actionCreators';
import { URL_COURSES, URL_LOGIN } from '../../constants';
import { postUser } from '../../services';

import './login.css';
import { loginUser } from '../../store/user/thunk';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	let history = useHistory();
	const dispatch = useDispatch();

	const login = (e) => {
		e.preventDefault();
		if (email !== '' && password.length > 0) {
			dispatch(loginUser({ email, password }, history));
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
