const mockedCoursesList = [
	{
		id: 'de5aaa59-90f5-4dbc-b8a9-aaf205c551ba',
		title: 'JavaScript',
		description: `Lorem Ipsum is simply dummy text of the printing and
    typesetting industry. Lorem Ipsum
    has been the industry's standard dummy text ever since
    the 1500s, when an unknown
    printer took a galley of type and scrambled it to make
    a type specimen book. It has survived
    not only five centuries, but also the leap into
    electronic typesetting, remaining essentially u
    nchanged.`,
		creationDate: '8/3/2021',
		duration: 160,
		authors: [
			'27cc3006-e93a-4748-8ca8-73d06aa93b6d',
			'f762978b-61eb-4096-812b-ebde22838167',
		],
	},
	{
		id: 'b5630fdd-7bf7-4d39-b75a-2b5906fd0916',
		title: 'Angular',
		description: `Lorem Ipsum is simply dummy text of the printing and
    typesetting industry. Lorem Ipsumhas been the industry's standard dummy text ever since
the 1500s, when an unknown
printer took a galley of type and scrambled it to make
a type specimen book.`,
		creationDate: '10/11/2020',
		duration: 210,
		authors: [
			'df32994e-b23d-497c-9e4d-84e4dc02882f',
			'095a1817-d45b-4ed7-9cf7-b2417bcbf748',
		],
	},
];
const mockedAuthorsList = [
	{
		id: '27cc3006-e93a-4748-8ca8-73d06aa93b6d',
		name: 'Vasiliy Dobkin',
	},
	{
		id: 'f762978b-61eb-4096-812b-ebde22838167',
		name: 'Nicolas Kim',
	},
	{
		id: 'df32994e-b23d-497c-9e4d-84e4dc02882f',
		name: 'Anna Sidorenko',
	},
	{
		id: '095a1817-d45b-4ed7-9cf7-b2417bcbf748',
		name: 'Valentina Larina',
	},
];

const BUTTON_LOGOUT = 'Logout';
const BUTTON_SEARCH = 'Search';
const BUTTON_UPDATE = 'Update';
const BUTTON_DELETE = 'Delete';
const BUTTON_UPDATE_COURSE = 'Update Course';
const BUTTON_ADD_NEW_COURSE = 'Add new course';
const BUTTON_SHOW_COURSE = 'Show course';
const BUTTON_CREATE_NEW_AUTHOR = 'Create author';
const BUTTON_CREATE_NEW_COURSE = 'Create course';
const BUTTON_ADD_AUTHOR = 'Add author';
const BUTTON_DELETE_AUTHOR = 'Delete author';
const BUTTON_TYPE_SUBMIT = 'submit';
const BUTTON_TYPE_BUTTON = 'button';

export const URL = 'http://localhost:3000';
export const URL_LOGIN = '/login';
export const URL_LOGOUT = '/logout';
export const URL_REGISER = '/register';
export const URL_COURSES = '/courses';
export const URL_GET_COURSES_ALL = '/courses/all';
export const URL_GET_AUTHORS_ALL = '/authors/all';
export const URL_POST_AUTHORS = '/authors/add';
export const URL_POST_COURSE = '/courses/add';
export const URL_USERS_ME = '/users/me';

export { mockedCoursesList, mockedAuthorsList };
export {
	BUTTON_LOGOUT,
	BUTTON_SEARCH,
	BUTTON_ADD_NEW_COURSE,
	BUTTON_SHOW_COURSE,
	BUTTON_CREATE_NEW_AUTHOR,
	BUTTON_CREATE_NEW_COURSE,
	BUTTON_ADD_AUTHOR,
	BUTTON_DELETE_AUTHOR,
	BUTTON_TYPE_SUBMIT,
	BUTTON_TYPE_BUTTON,
	BUTTON_UPDATE,
	BUTTON_DELETE,
	BUTTON_UPDATE_COURSE,
};
