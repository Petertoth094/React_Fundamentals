export const FormValidator = (title, desciption, duration, courseAuthors) => {
	const validTitle =
		title.trim() !== ''
			? ''
			: `Please enter a Title!
    current title: ${title}\n`;
	const validDesciption =
		desciption.trim() !== '' && desciption.length > 1
			? ''
			: `Please enter a description that is minimum 2 characters long!
            current description is ${desciption.length} long\n`;
	const validDuration =
		!Number.isNaN(+duration) && +duration > 0
			? ''
			: `Please give a valid duration!
    current duration is: ${duration}\n`;
	const validIsAuthor =
		courseAuthors.length > 0 ? '' : `Please add authors to the course!\n`;

	return `${validTitle}${validDesciption}${validDuration}${validIsAuthor}`;
};
