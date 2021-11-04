import React from 'react';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';
import { BUTTON_LOGOUT } from '../../constants';
import logo from '../../assets/images/logo.png';

import { setLogout } from '../../store/user/actionCreators';
import { getUser } from '../../store/selectors';

import './header.css';

const Header = () => {
	const history = useHistory();

	const user = useSelector(getUser);
	const dispatch = useDispatch();

	const removeUser = () => {
		dispatch(setLogout());
		history.push('/login');
	};

	return (
		<header className='header-container'>
			<Logo logo={logo} />
			{user.token && (
				<>
					<h2 className='header-title--right'>{user.name}</h2>
					<Button content={BUTTON_LOGOUT} onClick={removeUser} />
				</>
			)}
		</header>
	);
};

export default Header;
