import React from 'react';

import { Button, Input, Toggle, Wrapper } from 'components';
import { useAppSelector, useTodoActions } from 'store';
import { REQUIRED_ERROR } from 'consts';

import { TodoListComponent } from './components';

export const Todo: React.FC = () => {
	const [inputValue, setInputValue] = React.useState<string>('');
	const [error, setError] = React.useState<boolean>(true);
	const [isSubmitted, setIsSubmitted] = React.useState<boolean>(false);
	const { addTodo, toggleEditMode } = useTodoActions();

	const isEditMode = useAppSelector(state => state.todoSlice.isEditMode);

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
		const title = inputValue.trim();

		if (!title) {
			setIsSubmitted(true);
			return null;
		}

		addTodo(title);
		invalidateFormState();
	};

	React.useEffect(() => {
		setIsSubmitted(false);
	}, [isEditMode]);

	return (
		<Wrapper>
			<h1 className="my-10 text-center text-4xl">Todo Management</h1>
			<form onSubmit={handleSubmit}>
				<div className="flex gap-4 items-start h-20">
					<Input
						value={inputValue}
						onChange={changeInputValue}
						error={error && isSubmitted && isEditMode}
						errorText={REQUIRED_ERROR}
						placeholder="Enter your task"
						disabled={!isEditMode}
					/>
					<Button className="w-80" type="submit" disabled={!isEditMode}>
						Add todo
					</Button>
				</div>
				<div className="flex justify-end">
					<Toggle checked={isEditMode} onChange={toggleEditMode} label="Edit" />
				</div>
			</form>
			<TodoListComponent />
		</Wrapper>
	);
};
