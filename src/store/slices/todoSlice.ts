import React from 'react';
import { PayloadAction, bindActionCreators, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch } from 'store';

import { defaultTodoList } from './utils';
import { ITodoInitialState } from './types';

const initialState: ITodoInitialState = {
	data: defaultTodoList,
	isEditMode: false,
};

export const todoSlice = createSlice({
	name: 'todoSlice',
	initialState,
	reducers: {
		addTodo: (state, { payload: title }: PayloadAction<string>) => {
			state.data.push({
				id: uuidv4(),
				title,
				complete: false,
				isDeleted: false,
			});
		},
		deleteTodo: (state, { payload: id }: PayloadAction<string>) => {
			state.data = state.data.map(todo => {
				if (todo.id === id) {
					return { ...todo, isDeleted: true };
				}
				return todo;
			});
		},
		toggleTodo: (state, { payload: id }: PayloadAction<string>) => {
			state.data = state.data.map(todo => {
				if (todo.id === id && !todo.isDeleted) {
					return { ...todo, complete: !todo.complete };
				}
				return todo;
			});
		},
		toggleEditMode: state => {
			state.isEditMode = !state.isEditMode;
		},
	},
});

export const useTodoActions = () => {
	const dispatch = useAppDispatch();

	return React.useMemo(() => bindActionCreators(todoSlice.actions, dispatch), [dispatch]);
};
