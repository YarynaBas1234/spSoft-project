import React, { useCallback, useMemo } from 'react';

import { ITodo } from 'types';

const defaultTodoList = [
	{
		id: '123',
		title: 'some title',
		complete: true,
	},
	{
		id: '1234',
		title: 'some title2',
		complete: true,
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
			},
		]);
	};

	const deleteTodo = useCallback(
		(id: string | number) => {
			setTodos(todos.filter(todo => todo.id !== id));
		},
		[todos]
	);

	const toggleTodo = useCallback(
		(id: string | number) => {
			setTodos(
				todos.map(todo => {
					if (todo.id !== id) return todo;
					return { ...todo, complete: !todo.complete };
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
