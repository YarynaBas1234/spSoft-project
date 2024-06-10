import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { PATH } from 'consts';
import { Login, Todo } from 'pages';
import { PrivateRoute } from 'utils';
import { useAppSelector } from 'store';

const App: React.FC = () => {
	const profile = useAppSelector(state => state.profileSlice.profile);

	const fallBackPath = !!profile ? PATH.TODO : PATH.LOGIN;

	return (
		<Routes>
			<Route element={<PrivateRoute />}>
				<Route path={PATH.TODO} element={<Todo />} />
			</Route>

			{!profile && <Route path={PATH.LOGIN} element={<Login />} />}
			<Route path="*" element={<Navigate to={fallBackPath} replace />} />
		</Routes>
	);
};

export default App;
