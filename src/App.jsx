import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import CourseInfo from './components/CourseInfo/CourseInfo';

import './App.css';

function App() {
	const [user, setUser] = useState(
		window.localStorage.getItem('user')
			? JSON.parse(window.localStorage.getItem('user'))
			: null
	);

	return (
		<div className='container'>
			<Header user={user} setUser={setUser} />
			<main className='course-container'>
				<Switch>
					<Route exact path='/login'>
						<Login setUser={setUser} />
					</Route>
					<Route exact path='/registration'>
						<Registration />
					</Route>
					<Route exact path='/courses'>
						<Courses />
					</Route>
					<Route exact path='/courses/add'>
						<CreateCourse />
					</Route>
					<Route exact path='/courses/:courseID'>
						<CourseInfo />
					</Route>
					<Route path='/'>
						{!user ? <Redirect to='/login' /> : <Redirect to='/courses' />}
					</Route>
				</Switch>
			</main>
		</div>
	);
}

export default App;
