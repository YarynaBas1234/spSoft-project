import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { applicationApi } from './applicationApi';
import { profileSlice, todoSlice } from './slices';

const rootReducer = combineReducers({
	todoSlice: todoSlice.reducer,
	profileSlice: profileSlice.reducer,
	[applicationApi.reducerPath]: applicationApi.reducer,
});

export const store = configureStore({
	reducer: rootReducer,
	devTools: true,
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(applicationApi.middleware),
});
