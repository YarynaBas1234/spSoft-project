import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { todoSlice } from './slices/todoSlice';

const rootReducer = combineReducers({
	todoSlice: todoSlice.reducer,
});

export const store = configureStore({
	reducer: rootReducer,
	devTools: true,
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(),
});
