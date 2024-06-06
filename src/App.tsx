import React from 'react';

import { Input, TodoListComponent } from 'components';

const App: React.FC = () => {
	const [inputValue, setInputValue] = React.useState('');

	const changeInputValue: React.ChangeEventHandler<HTMLInputElement> = e => {
		setInputValue(e.target.value);
	};

	return (
		<div>
			<Input value={inputValue} onChange={changeInputValue} />
			<TodoListComponent inputValue={inputValue} setInputValue={setInputValue} />
		</div>
	);
};

export default App;
