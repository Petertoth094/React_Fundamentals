import * as constants from '../../constants';
import { setLogin, setLogout, updateLogin } from './actionCreators';

export const fetchUserRole = (token) => {
	return async function fetchUserRoleThunk(dispatch, getState) {
		try {
			const response = await fetch(
				`${constants.URL}${constants.URL_USERS_ME}`,
				{
					method: 'GET',
					headers: {
						Authorization: token,
					},
				}
			);
			const result = await response.json();
			if (result?.successful) {
				dispatch(updateLogin(result.result));
			} else {
				console.log('Something is wrong with FethUserRoleTHunk');
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const deleteUser = () => {
	return async function deleteUserThunk(dispatch, getState) {
		try {
			const token = getState()?.user?.token;
			const response = await fetch(`${constants.URL}${constants.URL_LOGOUT}`, {
				method: 'DELETE',
				headers: {
					Authorization: token,
				},
			});
			if (response.status === 200) {
				dispatch(setLogout());
				return { success: true, msg: '' };
			} else {
				return { success: false, msg: 'DeleteUserThunk error' };
				// console.log('deleteUserThunk error');
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const loginUser = (user) => {
	return async function loginUserThunk(dispatch, getState) {
		try {
			const response = await fetch(`${constants.URL}${constants.URL_LOGIN}`, {
				method: 'POST',
				body: JSON.stringify(user),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const result = await response.json();
			if (result.successful) {
				dispatch(setLogin(result.result, result.user));
				return true;
			} else {
				return false;
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const registerUser = (user) => {
	return async function registerUserThunk(dispatch, getState) {
		try {
			const response = await fetch(`${constants.URL}${constants.URL_REGISER}`, {
				method: 'POST',
				body: JSON.stringify(user),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const result = await response.json();
			if (result.successful) {
				return { success: true, msg: '' };
			} else {
				return { success: false, msg: result.errors };
			}
		} catch (error) {
			console.log(error);
		}
	};
};
