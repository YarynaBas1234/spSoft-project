import { applicationApi } from 'store/applicationApi';

import { IUserRoleResponse } from './types';

export const profileApi = applicationApi.injectEndpoints({
	endpoints: builder => ({
		getUserRole: builder.query<IUserRoleResponse, string>({
			query: id => ({
				url: '/permission',
				params: { id },
			}),
		}),
	}),
});

export const { useLazyGetUserRoleQuery } = profileApi;
