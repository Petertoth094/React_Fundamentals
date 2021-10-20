import React from 'react';

const Logo = ({ logo }) => {
	return (
		<div className='img-container'>
			<img src={logo} alt='header-logo' className='photo' />
		</div>
	);
};

export default Logo;
