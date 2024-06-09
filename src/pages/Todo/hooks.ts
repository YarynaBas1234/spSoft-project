import { useAppSelector } from 'store/hooks';

export const useTodosState = () => {
	const todos = useAppSelector(state => state.todoSlice.data);
	const isEditMode = useAppSelector(state => state.todoSlice.isEditMode);

	const validatedTodos = todos.filter(({ isDeleted }) => isEditMode || !isDeleted);

	const sortedTodos = validatedTodos.sort(function (x, y) {
		return Number(x.complete) - Number(y.complete);
	});

	return {
		todos: sortedTodos,
	};
};
