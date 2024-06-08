import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { PATH } from 'consts';
import { Login, Todo } from 'pages';
import { PrivateRoute } from 'utils';

const App: React.FC = () => {
	return (
		<Routes>
			<Route element={<PrivateRoute />}>
				<Route path={PATH.LOGIN} element={<Todo />} />
			</Route>

			<Route path={PATH.LOGIN} element={<Login />} />
			<Route path="*" element={<Navigate to={PATH.LOGIN} replace />} />
		</Routes>
	);
};

export default App;
