import React from 'react';
import { PayloadAction, bindActionCreators, createSlice } from '@reduxjs/toolkit';

import { useAppDispatch } from 'store';

import { IProfileInitialState, Profile } from './types';

const currentUser = localStorage.getItem('user');
const profile: Profile = currentUser ? JSON.parse(currentUser) : null;

const initialState: IProfileInitialState = {
	profile,
};

export const profileSlice = createSlice({
	name: 'profileSlice',
	initialState,
	reducers: {
		setProfileData: (state, { payload: profile }: PayloadAction<Profile>) => {
			localStorage.setItem('user', JSON.stringify(profile));
			state.profile = profile;
		},
		removeProfileData: state => {
			localStorage.removeItem('user');
			state.profile = null;
		},
	},
});

export const useProfileActions = () => {
	const dispatch = useAppDispatch();

	return React.useMemo(() => bindActionCreators(profileSlice.actions, dispatch), [dispatch]);
};
