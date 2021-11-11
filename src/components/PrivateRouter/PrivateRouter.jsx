import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { getUser } from '../../store/selectors';
import { fetchUserRole } from '../../store/user/thunk';

const PrivateRouter = ({ component: Component, ...rest }) => {
	const user = useSelector(getUser);
	const dispatch = useDispatch();

	useEffect(() => {
		if (window.localStorage.getItem('user')) {
			dispatch(fetchUserRole(window.localStorage.getItem('user')));
		}
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
