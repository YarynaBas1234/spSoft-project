import React, { memo } from 'react';
import { IoIosClose } from 'react-icons/io';

import { Checkbox, ButtonIcon } from 'components';
import { ITodo } from 'types';

interface ITodoListProps {
	todos: ITodo[];
	toggleTodo: (id: string | number) => void;
	deleteTodo: (id: string | number) => void;
}

export const TodoListComponent: React.FC<ITodoListProps> = memo(props => {
	const { todos, toggleTodo, deleteTodo } = props;

	return (
		<div className="mt-5 flex flex-col gap-3">
			{todos.map(({ id, complete, title }) => (
				<div className="flex gap-4 items-center" key={id}>
					<Checkbox checked={complete} label={title} onChange={() => toggleTodo(id)} />
					<ButtonIcon className="text-comp-orange" icon={<IoIosClose size={30} />} onClick={() => deleteTodo(id)} />
				</div>
			))}
		</div>
	);
});
