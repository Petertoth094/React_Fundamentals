import React from 'react';

import './logo.css';

const Logo = ({ logo }) => {
	return (
		<div className='img-container'>
			<img src={logo} alt='courses-app-logo' className='photo' />
		</div>
	);
};

export default Logo;
