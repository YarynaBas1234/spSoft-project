import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { PATH } from 'consts';
import { useAppSelector } from 'store';

export const PrivateRoute: React.FC = () => {
	const profile = useAppSelector(state => state.profileSlice.profile);

	return !!profile ? <Outlet /> : <Navigate replace to={PATH.LOGIN} />;
};
