import React from 'react';

import './button.css';

const Button = ({ content, type = 'submit', onClick, class_name = '' }) => {
	return (
		<button className={`btn ${class_name}`} type={type} onClick={onClick}>
			{content}
		</button>
	);
};

export default Button;
