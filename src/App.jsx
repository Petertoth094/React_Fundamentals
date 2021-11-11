import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CourseForm from './components/CourseForm/CourseForm';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import CourseInfo from './components/CourseInfo/CourseInfo';
import PrivateRouter from './components/PrivateRouter/PrivateRouter';

import { localeUser } from './constants';

import './App.css';

function App() {
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
					<PrivateRouter exact path='/courses/add' component={CourseForm} />
					<PrivateRouter
						exact
						path='/courses/update/:courseID'
						component={CourseForm}
					/>
					<Route exact path='/courses/:courseID'>
						<CourseInfo />
					</Route>
					<Route path='/'>
						{!localeUser ? (
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
