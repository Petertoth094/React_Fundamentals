import React from 'react';
import './button.css';

const Button = ({ content, type, onClick }) => {
	if (type === 'submit') {
		return (
			<button className='btn' type={type}>
				{content}
			</button>
		);
	} else {
		return (
			<button className='btn' type={type} onClick={onClick}>
				{content}
			</button>
		);
	}
};

export default Button;
