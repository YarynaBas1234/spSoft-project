import { PATH } from 'consts';
import { notify } from 'helpers/notify';
import { useNavigate } from 'react-router-dom';

import { ILoginParams, useLoginMutation, useProfileActions } from 'store';

export const useLogin = () => {
	const [triggerLogin, { isLoading }] = useLoginMutation();
	const { setProfileData } = useProfileActions();

	const navigate = useNavigate();

	const login = async ({ login, password }: ILoginParams) => {
		try {
			const res = await triggerLogin({ login, password }).unwrap();

			if (res?.data) {
				setProfileData(res.data);
				navigate(PATH.TODO);
				return;
			}
			throw res?.error;
		} catch (err) {
			notify({ message: err as string, type: 'error' });
		}
	};

	return { login, isLoading };
};
