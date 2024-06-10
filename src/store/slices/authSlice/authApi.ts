import { applicationApi } from 'store/applicationApi';

import { ILoginResponse, ILoginParams } from './types';

export const authApi = applicationApi.injectEndpoints({
	endpoints: builder => ({
		login: builder.mutation<ILoginResponse, ILoginParams>({
			query(body) {
				return {
					url: '/login',
					method: 'POST',
					body,
				};
			},
		}),
	}),
});

export const { useLoginMutation } = authApi;
