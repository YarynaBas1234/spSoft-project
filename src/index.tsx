import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { store } from 'store';

import App from './App';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
		<ToastContainer />
	</React.StrictMode>
);
