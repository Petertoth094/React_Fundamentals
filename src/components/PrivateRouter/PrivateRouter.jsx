import React from 'react';
import { Redirect, Route } from 'react-router';

const PrivateRouter = ({ component: Component, role, ...rest }) => {
	if (role === '') {
		return <></>;
	}

	return (
		<Route
			{...rest}
			render={(props) =>
				role === 'admin' ? <Component {...props} /> : <Redirect to='/courses' />
			}
		/>
	);
};

export default PrivateRouter;
