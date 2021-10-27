import React from 'react';
import PropTypes from 'prop-types';

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

Button.propTypes = {
	content: PropTypes.string.isRequired,
	type: PropTypes.oneOf(['submit', 'button', 'reset']),
	onClick: PropTypes.func,
	buttonClassName: PropTypes.string,
};

export default Button;
