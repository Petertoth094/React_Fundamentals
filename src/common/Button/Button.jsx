import React from 'react';

import './button.css';

const Button = ({
	content,
	type = 'submit',
	onClick,
	buttonClassName = '',
}) => {
	return (
		<button className={`btn ${buttonClassName}`} type={type} onClick={onClick}>
			{content}
		</button>
	);
};

export default Button;
