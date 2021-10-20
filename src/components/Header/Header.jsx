import React from 'react';
import './header.css';

import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import logo from '../../assets/images/logo.png';

const Header = () => {
	return (
		<header className='header-container'>
			<Logo logo={logo} />
			<h2>Peter</h2>
			<Button content={'logout'} />
		</header>
	);
};

export default Header;
