import { useNavigate } from 'react-router-dom';

import { PATH } from 'consts';
import { useProfileActions } from 'store';

export const useLogout = () => {
	const navigate = useNavigate();
	const { removeProfileData } = useProfileActions();

	const logout = () => {
		removeProfileData();
		navigate(PATH.LOGIN);
	};

	return { logout };
};
