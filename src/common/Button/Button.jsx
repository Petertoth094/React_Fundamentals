import React from 'react';
import PropTypes from 'prop-types';

import './button.css';

const Button = ({
	content,
	type = 'submit',
	onClick,
	buttonClassName = '',
	testId,
}) => {
	return (
		<button
			data-testid={testId}
			className={`btn ${buttonClassName}`}
			type={type}
			onClick={onClick}
		>
			{content}
		</button>
	);
};

Button.propTypes = {
	content: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	type: PropTypes.oneOf(['submit', 'button', 'reset']),
	onClick: PropTypes.func,
	buttonClassName: PropTypes.string,
};

export default Button;
