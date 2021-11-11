import React from 'react';
import PropTypes from 'prop-types';

import './input.css';

const Input = ({
	labelText,
	placeholderText,
	type = 'text',
	name = '',
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
				onChange={(e) => onChangeHandler(e.target.value)}
			/>
		</>
	);
};

Input.propTypes = {
	labelText: PropTypes.string,
	placeholderText: PropTypes.string,
	type: PropTypes.string,
	name: PropTypes.string,
	valueHandler: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	onChangeHandler: PropTypes.func,
	inputClassName: PropTypes.string,
	labelClassName: PropTypes.string,
};

export default Input;
