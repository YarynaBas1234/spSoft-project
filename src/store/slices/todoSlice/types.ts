export interface ITodo {
	id: string;
	title: string;
	complete: boolean;
	isDeleted: boolean;
}

export interface ITodoInitialState {
	data: ITodo[];
	isEditMode: boolean;
}
