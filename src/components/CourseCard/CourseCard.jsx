import React from 'react';
import { mockedAuthorsList } from '../../utils/users';
import Button from '../Button/Button';
import './course-card.css';

const CourseCard = ({
	id,
	title,
	description,
	creationDate,
	duration,
	authors,
}) => {
	// const [renderAuthors, setRenderAuthors] = useState('');
	// const [renderDuration, setRenderDuration] = useState('');
	const fixLength = 200;

	const renderAuthorsFun = (authors) => {
		const currentAuthors = authors.map((id) => {
			const index = mockedAuthorsList.findIndex((author) => author.id === id);
			return mockedAuthorsList[index]?.name;
		});
		return currentAuthors.length > 2
			? currentAuthors.slice(0, 2).join(',') + '...'
			: currentAuthors.join(',');
	};
	const renderDurationFun = (duration) => {
		const min = duration % 60;
		const hour = (duration - min) / 60;
		return `${hour < 10 ? '0' + hour : hour}:${
			min < 10 ? '0' + min : min
		} hours`;
	};

	//esetleg fölösleges és a returnben vissza adom a renderAuthorsFun értékét?
	// useEffect(() => {
	// 	const authorsStr = renderAuthorsFun(authors);
	// 	setRenderAuthors(authorsStr);
	// }, [authors, renderAuthors]);

	return (
		<article className='course-card'>
			<section>
				<h2>{title}</h2>
				<p>
					{description.length < 80
						? description
						: `${description.slice(0, fixLength - 3)}...`}
				</p>
			</section>
			<section>
				<p>
					<span>Authors: </span>
					{renderAuthorsFun(authors)}
					{/* {renderAuthors} */}
				</p>
				<p>
					<span>Duration: </span>
					{/* {duration} */}
					{renderDurationFun(duration)}
				</p>
				<p>
					<span>Created: </span>
					{creationDate}
				</p>
				<Button content='Show course' />
			</section>
		</article>
	);
};

export default CourseCard;
