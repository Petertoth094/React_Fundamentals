import React from 'react';
import './input.css';

const Input = ({
	labelText,
	placeholderText,
	type = 'text',
	name = '',
	required = false,
	valueHandler,
	onChangeHandler,
	inputClassName = '',
	labelClassName = '',
}) => {
	return (
		<>
			<label htmlFor={name} className={`${labelClassName}`}>
				{labelText}
			</label>
			<input
				type={type}
				name={name}
				id={name}
				placeholder={placeholderText}
				className={`input-field ${inputClassName}`}
				value={valueHandler}
				required={required}
				onChange={(e) => onChangeHandler(e.target.value)}
			/>
		</>
	);
};

export default Input;
