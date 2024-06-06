import React from 'react';

import { Button, Input, TodoListComponent } from 'components';
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

const App: React.FC = () => {
	const [inputValue, setInputValue] = React.useState('');
	const [todos, setTodos] = React.useState<ITodo[]>(defaultTodoList);

	const changeInputValue: React.ChangeEventHandler<HTMLInputElement> = e => {
		setInputValue(e.target.value);
	};

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

	return (
		<div>
			<div className="flex gap-4">
				<Input value={inputValue} onChange={changeInputValue} />
				<Button onClick={() => addTodo()}>Add list</Button>
			</div>
			<TodoListComponent todos={todos} setTodos={setTodos} />
		</div>
	);
};

export default App;
