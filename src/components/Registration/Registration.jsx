import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';

import { registerUser } from '../../store/user/thunk';

import { URL_LOGIN } from '../../constants';

import './registration.css';

const Registration = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const history = useHistory();
	const dispatch = useDispatch();

	const register = (e) => {
		e.preventDefault();
		if (name !== '' && email !== '' && password.length > 0) {
			dispatch(registerUser({ name, email, password })).then((data) =>
				data.success ? history.push(URL_LOGIN) : alert(data.msg)
			);
		} else {
			alert('Input the neccesary data');
		}
	};

	return (
		<div className='registration-container'>
			<h2>Registration</h2>
			<form className='registration-form' onSubmit={register}>
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
