// TODO: move to pages
import React from 'react';
import { IoIosClose } from 'react-icons/io';

import { Checkbox, ButtonIcon } from 'components';
import { ITodo } from 'types';

interface ITodoListProps {
	todos: ITodo[];
	setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

interface ITodoItemProps {
	id: string | number;
	isChecked: boolean;
	text: string;
	toggleTodo: (id: string | number) => void;
	onDelete: (id: string | number) => void;
}

const TodoItem: React.FC<ITodoItemProps> = props => {
	const { id, isChecked, text, toggleTodo, onDelete } = props;

	return (
		<div className="flex gap-4 items-center">
			<Checkbox checked={isChecked} label={text} onChange={() => toggleTodo(id)} />
			<ButtonIcon icon={<IoIosClose color="#EB5028" size={30} />} onClick={() => onDelete(id)} />
		</div>
	);
};

export const TodoListComponent: React.FC<ITodoListProps> = props => {
	const { todos, setTodos } = props;

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
			<div className="mt-5 flex flex-col gap-3">
				{todos.map(todo => (
					<div key={todo.id}>
						<TodoItem
							id={todo.id}
							isChecked={todo.complete}
							text={todo.title}
							toggleTodo={toggleTodo}
							onDelete={deleteTodo}
						/>
					</div>
				))}
			</div>
		</div>
	);
};
