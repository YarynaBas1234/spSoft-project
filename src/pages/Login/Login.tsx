import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Input, Wrapper } from 'components';
import { PATH, REQUIRED_ERROR } from 'consts';

import { useLoginFieldsState } from './hooks';

export const Login: React.FC = () => {
	const [isSubmitted, setIsSubmitted] = React.useState(false);
	
	const { value: loginValue, onChange: onLoginChange, error: isLoginError } = useLoginFieldsState();
	const { value: passwordValue, onChange: onPasswordChange, error: isPasswordError } = useLoginFieldsState();

	const navigate = useNavigate();

	const handleForm: React.FormEventHandler<HTMLFormElement> = e => {
		e.preventDefault();
		setIsSubmitted(true);

		if (isLoginError || isPasswordError) return;

		navigate(PATH.TODO);
	};

	return (
		<Wrapper className="flex items-center justify-center min-h-screen max-w-[450px]">
			<form className="w-full flex flex-col px-8 py-10 border shadow-thin rounded-lg" onSubmit={handleForm}>
				<h1 className="text-4xl text-center mb-5">Login</h1>
				<Input
					value={loginValue}
					onChange={onLoginChange}
					error={isLoginError && isSubmitted}
					errorText={REQUIRED_ERROR}
					name="login"
					placeholder='Enter Your Login'
					label='Login'
					wrapperClassName='h-28'
				/>
				<Input
					value={passwordValue}
					onChange={onPasswordChange}
					type="password"
					error={isPasswordError && isSubmitted}
					errorText={REQUIRED_ERROR}
					name="password"
					placeholder='Enter Your Password'
					label='Password'
					wrapperClassName='h-28'
				/>
				<Button type='submit' className='mt-2'>Login</Button>
			</form>
		</Wrapper>
	);
};
