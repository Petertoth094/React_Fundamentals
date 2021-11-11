import * as constants from '../../constants';
import { setLogout, updateLogin } from './actionCreators';

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

export const deleteUser = (token) => {
	return async function deleteUserThunk(dispatch, getState) {
		try {
			const response = await fetch(`${constants.URL}${constants.URL_LOGOUT}`, {
				method: 'DELETE',
				headers: {
					Authorization: token,
				},
			});
			if (response.status === 200) {
				dispatch(setLogout());
			} else {
				console.log('deleteUserThunk error');
			}
		} catch (error) {
			console.log(error);
		}
	};
};
