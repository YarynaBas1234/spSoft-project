import React, { useCallback, useMemo } from 'react';

import { ITodo } from 'types';

const defaultTodoList = [
	{
		id: '123',
		title: 'some title',
		complete: true,
		isDeleted: false,
	},
	{
		id: '1234',
		title: 'some title2',
		complete: true,
		isDeleted: false,
	},
];

export const useTodos = () => {
	const [todos, setTodos] = React.useState<ITodo[]>(defaultTodoList);

	const sortedTodos = useMemo(
		() =>
			todos.sort(function (x, y) {
				return Number(x.complete) - Number(y.complete);
			}),
		[todos]
	);

	const addTodo = (todoTitle: string) => {
		setTodos([
			...todos,
			{
				id: Date.now(),
				title: todoTitle,
				complete: false,
				isDeleted: false,
			},
		]);
	};

	const deleteTodo = useCallback(
		(id: string | number) => {
			setTodos(
				todos.map(todo => {
					if (todo.id === id) {
						return { ...todo, isDeleted: true };
					}
					return todo;
				})
			);
		},
		[todos]
	);

	const toggleTodo = useCallback(
		(id: string | number) => {
			setTodos(
				todos.map(todo => {
					if (todo.id === id && !todo.isDeleted) {
						return { ...todo, complete: !todo.complete };
					}

					return todo;
				})
			);
		},
		[todos]
	);

	return {
		todos: sortedTodos,
		addTodo,
		deleteTodo,
		toggleTodo,
	};
};
