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
	class_name = '',
	labelClass_name = '',
}) => {
	return (
		<>
			<label htmlFor={name} className={`${labelClass_name}`}>
				{labelText}
			</label>
			<input
				type={type}
				name={name}
				id={name}
				placeholder={placeholderText}
				className={`input-field ${class_name}`}
				value={valueHandler}
				required={required}
				onChange={(e) => onChangeHandler(e.target.value)}
			/>
		</>
	);
};

export default Input;
