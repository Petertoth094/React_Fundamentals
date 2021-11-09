import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CourseForm from './components/CourseForm/CourseForm';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import CourseInfo from './components/CourseInfo/CourseInfo';

import './App.css';

function App() {
	const user = window.localStorage.getItem('user') || null;
	const [firstRender, setFirstRender] = useState(true);

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
						<Courses
							firstRender={firstRender}
							setFirstRender={setFirstRender}
						/>
					</Route>
					<Route exact path='/courses/add'>
						<CourseForm />
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
