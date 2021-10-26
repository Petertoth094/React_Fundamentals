import React from 'react';
import PropTypes from 'prop-types';

import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';
import { BUTTON_LOGOUT } from '../../constants';
import logo from '../../assets/images/logo.png';

import './header.css';

const Header = ({ user, setUser, history }) => {
	const removeUser = () => {
		window.localStorage.removeItem('user');
		setUser(null);
		history.push('/login');
	};

	return (
		<header className='header-container'>
			<Logo logo={logo} />
			{user && (
				<>
					<h2 className='header-title--right'>{user?.name}</h2>
					<Button content={BUTTON_LOGOUT} onClick={removeUser} />
				</>
			)}
		</header>
	);
};
Header.propTypes = {
	user: PropTypes.object,
	setUser: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
	history: PropTypes.object.isRequired,
};

export default Header;
