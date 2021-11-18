import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CourseForm from './components/CourseForm/CourseForm';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import CourseInfo from './components/CourseInfo/CourseInfo';
import PrivateRouter from './components/PrivateRouter/PrivateRouter';

import './App.css';
import { useSelector } from 'react-redux';
import { getUser } from './store/selectors';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchUserRole } from './store/user/thunk';

function App() {
	const user = useSelector(getUser);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchUserRole());
	}, [dispatch]);

	return (
		<div className='container'>
			<Header />
			<main className='course-container'>
				<Switch>
					<Route exact path='/login'>
						<Login />
					</Route>
					<Route exact path='/registration'>
						<Registration />
					</Route>
					<Route exact path='/courses'>
						<Courses />
					</Route>
					<PrivateRouter
						exact
						path='/courses/add'
						component={CourseForm}
						role={user.role}
					/>
					<PrivateRouter
						exact
						path='/courses/update/:courseID'
						component={CourseForm}
						role={user.role}
					/>
					<Route exact path='/courses/:courseID'>
						<CourseInfo />
					</Route>
					<Route path='/'>
						{!user.isAuth ? (
							<Redirect to='/login' />
						) : (
							<Redirect to='/courses' />
						)}
					</Route>
				</Switch>
			</main>
		</div>
	);
}

export default App;

/**
 * admin@email.com
 * admin123
 */

/**
 * 
{
  "name": "lajoska",
  "email": "lajoska@email.com",
  "password": "lajoska"
}
 */
