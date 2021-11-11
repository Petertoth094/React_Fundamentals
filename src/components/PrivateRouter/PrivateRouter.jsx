import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Redirect, Route, useHistory } from 'react-router';

import { getUser } from '../../store/selectors';
import { fetchUserRole } from '../../store/user/thunk';

const PrivateRouter = ({ component: Component, ...rest }) => {
	const [loading, setLoading] = useState(true);
	const user = useSelector(getUser);
	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
		if (window.localStorage.getItem('user')) {
			dispatch(fetchUserRole(window.localStorage.getItem('user')));
		} else {
			history.replace('/login');
		}
		setLoading(!loading);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch]);

	if (user.role === '') {
		return <></>;
	}

	return (
		<Route
			{...rest}
			render={(props) =>
				user.role === 'admin' ? (
					<Component {...props} />
				) : (
					<Redirect to='/courses' />
				)
			}
		/>
	);
};

export default PrivateRouter;
