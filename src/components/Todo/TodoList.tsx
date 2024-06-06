// TODO: move to pages
import React from 'react';
import { IoIosClose } from 'react-icons/io';

import { Button, Checkbox, ButtonIcon } from 'components';
import { ITodo } from 'types';

interface ITodoListProps {
	inputValue: string;
	setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

interface ITodoItemProps {
	id: string | number;
	isChecked: boolean;
	text: string;
	toggleTodo: (id: string | number) => void;
}

export const TodoListComponent: React.FC<ITodoListProps> = props => {
	const { inputValue, setInputValue } = props;

	const [todos, setTodos] = React.useState<ITodo[]>([
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
	]);

	const addTodo = () => {
		if (!inputValue.trim()) return null;

		setTodos([
			...todos,
			{
				id: Date.now(),
				title: inputValue,
				complete: false,
			},
		]);
		setInputValue('');
	};

	const deleteTodo = (id: string | number) => {
		setTodos(todos.filter(todo => todo.id !== id));
	};

	const toggleTodo = (id: string | number) => {
		setTodos(
			todos.map(todo => {
				if (todo.id !== id) return todo;
				return { ...todo, complete: !todo.complete };
			})
		);
	};

	return (
		<div>
			<Button onClick={() => addTodo()}>Add list</Button>

			{todos.map(todo => (
				<div key={todo.id}>
					<TodoItem id={todo.id} isChecked={todo.complete} text={todo.title} toggleTodo={toggleTodo} />
					<ButtonIcon icon={<IoIosClose />} onClick={() => deleteTodo(todo.id)} />
				</div>
			))}
		</div>
	);
};

const TodoItem: React.FC<ITodoItemProps> = props => {
	const { id, isChecked, text, toggleTodo } = props;

	return <Checkbox checked={isChecked} label={text} onChange={() => toggleTodo(id)} />;
};
