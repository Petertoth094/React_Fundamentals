import { useState } from 'react';
import { Route, Switch, useHistory, Redirect } from 'react-router-dom';

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

	let history = useHistory();

	return (
		<div className='container'>
			<Header history={history} user={user} setUser={setUser} />
			<main className='course-container'>
				<Switch>
					<Route exact path='/'>
						{!user ? <Redirect to='/login' /> : <Redirect to='/courses' />}
					</Route>
					<Route exact path='/login'>
						<Login history={history} setUser={setUser} />
					</Route>
					<Route exact path='/registration'>
						<Registration history={history} />
					</Route>
					<Route exact path='/courses'>
						<Courses history={history} />
					</Route>
					<Route exact path='/courses/add'>
						<CreateCourse history={history} />
					</Route>
					<Route exact path='/courses/:courseID'>
						<CourseInfo history={history} />
					</Route>
				</Switch>
			</main>
		</div>
	);
}

export default App;
