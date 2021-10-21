import React from 'react';

import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';
import { BUTTON_LOGOUT } from '../../constants';
import logo from '../../assets/images/logo.png';

import './header.css';

const Header = () => {
	return (
		<header className='header-container'>
			<Logo logo={logo} />
			<h2 className='header-title--right'>Peter</h2>
			<Button content={BUTTON_LOGOUT} />
		</header>
	);
};

export default Header;
