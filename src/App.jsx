import { useState } from 'react';

import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';

import './App.css';

function App() {
	const [addNewCourse, setAddNewCourse] = useState(false);
	return (
		<div className='container'>
			<Header />
			<main className='course-container'>
				{!addNewCourse ? (
					<Courses setAddNewCourse={setAddNewCourse} />
				) : (
					<CreateCourse
						setAddNewCourse={setAddNewCourse}
						addNewCourse={addNewCourse}
					/>
				)}
			</main>
		</div>
	);
}

export default App;
