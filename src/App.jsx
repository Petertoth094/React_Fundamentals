// import './App.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse_old';

// import './App.css';
import { useState } from 'react';

function App() {
	const [addNewCourse, setAddNewCourse] = useState(false);
	return (
		<div className='container'>
			<Header />
			<main>
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
