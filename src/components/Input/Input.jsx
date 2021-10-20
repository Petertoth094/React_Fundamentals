import React from 'react';
import './input.css';

const Input = ({
	place_holder,
	type = 'text',
	valueHandler,
	onChangeHandler,
	name = '',
	required = false,
}) => {
	return (
		<input
			type={type}
			name={name}
			placeholder={place_holder}
			className='input-field'
			value={valueHandler}
			required={required}
			onChange={(e) => onChangeHandler(e.target.value)}
		/>
	);
};

export default Input;
