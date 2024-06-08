import React from 'react';

import { Button, Input, Wrapper } from 'components';
import { REQUIRED_ERROR } from 'consts';

import { useTodos } from './hooks';
import { TodoListComponent } from './components';

export const Todo: React.FC = () => {
	const [inputValue, setInputValue] = React.useState('');
	const [error, setError] = React.useState(true);
	const [isSubmitted, setIsSubmitted] = React.useState(false);

	const { todos, deleteTodo, toggleTodo, addTodo } = useTodos();

	const changeInputValue: React.ChangeEventHandler<HTMLInputElement> = e => {
		setInputValue(e.target.value);

		if (e.target.value?.trim()) {
			setError(false);
			return;
		}

		setError(true);
	};

	const invalidateFormState = () => {
		setInputValue('');
		setError(true);
		setIsSubmitted(false);
	};

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = e => {
		e.preventDefault();
		const todoTitle = inputValue.trim();

		if (!todoTitle) {
			setIsSubmitted(true);
			return null;
		}

		addTodo(todoTitle);
		invalidateFormState();
	};

	return (
		<Wrapper>
			<h1 className='my-10 text-center text-4xl'>Todo Management</h1>
			<form className="flex gap-4 items-start h-20" onSubmit={handleSubmit}>
				<Input
					value={inputValue}
					onChange={changeInputValue}
					error={error && isSubmitted}
					errorText={REQUIRED_ERROR}
					placeholder="Enter your task"
				/>
				<Button className="w-80" type="submit">
					Add todo
				</Button>
			</form>
			<TodoListComponent todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
		</Wrapper>
	);
};
