import React from 'react';

import { PATH } from 'consts';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute: React.FC = () => {
	//TODO: move auth data to redux
	const auth = true;

	return auth ? <Outlet /> : <Navigate replace to={PATH.LOGIN} />;
};
