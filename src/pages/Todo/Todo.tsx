import React from 'react';
import { GrLogout } from 'react-icons/gr';

import { Button, ButtonIcon, Input, OverlayLoader, Toggle, Wrapper } from 'components';
import { USER_ROLES, useAppSelector, useLazyGetUserRoleQuery, useTodoActions } from 'store';
import { notify } from 'helpers/notify';
import { PERMISSION_ERROR, REQUIRED_ERROR } from 'consts';
import { useLogout } from 'hooks';

import { TodoListComponent } from './components';

export const Todo: React.FC = () => {
	const [inputValue, setInputValue] = React.useState<string>('');
	const [error, setError] = React.useState<boolean>(true);
	const [isSubmitted, setIsSubmitted] = React.useState<boolean>(false);

	const { addTodo, toggleEditMode, invalidateEditMode } = useTodoActions();
	const { logout } = useLogout();

	const [getUserRole, { isLoading }] = useLazyGetUserRoleQuery();

	const profile = useAppSelector(state => state.profileSlice.profile);
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

	const handleChangeEditMode = async (id: string) => {
		if (isEditMode) {
			toggleEditMode();
			return;
		}

		try {
			const response = await getUserRole(id).unwrap();

			if (response.role === USER_ROLES.ADMIN) {
				toggleEditMode();
				return;
			}
			throw PERMISSION_ERROR;
		} catch (err) {
			notify({ message: err as string, type: 'error' });
		}
	};

	React.useEffect(() => {
		setIsSubmitted(false);
	}, [isEditMode]);

	React.useEffect(() => {
		return () => {
			invalidateEditMode();
		};
	}, []);

	return (
		<>
			<OverlayLoader show={isLoading} />
			<Wrapper>
				<div className="flex items-center justify-end gap-4 my-6">
					<p>{profile?.name}</p>
					<ButtonIcon
						onClick={logout}
						className="border border-comp-blue px-[10px] py-2 rounded-md text-comp-blue"
						icon={<GrLogout />}
					>
						Logout
					</ButtonIcon>
				</div>
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
						<Button className="w-80 h-[55px]" type="submit" disabled={!isEditMode}>
							Add todo
						</Button>
					</div>
					<div className="flex justify-end">
						{profile && <Toggle checked={isEditMode} onChange={() => handleChangeEditMode(profile.id)} label="Edit" />}
					</div>
				</form>
				<TodoListComponent />
			</Wrapper>
		</>
	);
};
