export const renderAuthors = (IdAuthors, authors) => {
	return IdAuthors.map((id) => {
		const author = authors.find((author) => author.id === id);
		return author?.name;
	}).join(',');
};
