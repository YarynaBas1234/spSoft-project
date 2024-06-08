import React, { memo } from 'react';
import { IoIosClose } from 'react-icons/io';
import { twMerge } from 'tailwind-merge';

import { Checkbox, ButtonIcon } from 'components';
import { ITodo } from 'types';

interface ITodoListProps {
	todos: ITodo[];
	toggleTodo: (id: string | number) => void;
	deleteTodo: (id: string | number) => void;
	isEditMode: boolean;
}

export const TodoListComponent: React.FC<ITodoListProps> = memo(props => {
	const { todos, toggleTodo, deleteTodo, isEditMode } = props;

	return (
		<div className="mt-5 flex flex-col gap-3">
			{todos.map(({ id, complete, title, isDeleted }) => (
				<div
					className={twMerge(
						!isEditMode && isDeleted ? 'hidden' : 'flex gap-4 items-center',
						isDeleted && 'text-comp-mid-gray'
					)}
					key={id}
				>
					<Checkbox
						checked={complete}
						label={title}
						onChange={() => toggleTodo(id)}
						className={twMerge(isDeleted && 'border-comp-mid-gray', isDeleted && complete && 'bg-comp-mid-gray')}
						wrapperClassName={twMerge(isDeleted && 'cursor-default')}
					/>
					{!isDeleted && (
						<ButtonIcon
							disabled={!isEditMode}
							className={twMerge('text-comp-orange', 'disabled:text-comp-mid-gray')}
							icon={<IoIosClose size={30} />}
							onClick={() => deleteTodo(id)}
						/>
					)}
				</div>
			))}
		</div>
	);
});
