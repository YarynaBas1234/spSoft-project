import React from 'react';

import { Button, Input, Wrapper, OverlayLoader } from 'components';
import { REQUIRED_ERROR } from 'consts';
import { useLogin } from 'hooks';

import { useLoginFieldsState } from './hooks';

export const Login: React.FC = () => {
	const [isSubmitted, setIsSubmitted] = React.useState(false);

	const { value: loginValue, onChange: onLoginChange, error: isLoginError } = useLoginFieldsState();
	const { value: passwordValue, onChange: onPasswordChange, error: isPasswordError } = useLoginFieldsState();

	const { login, isLoading } = useLogin();

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = async e => {
		e.preventDefault();
		setIsSubmitted(true);

		if (isLoginError || isPasswordError) return;

		login({ login: loginValue, password: passwordValue });
	};

	return (
		<>
			<OverlayLoader show={isLoading} />
			<Wrapper className="flex items-center justify-center min-h-screen max-w-[450px]">
				<form className="w-full flex flex-col px-8 py-10 border shadow-thin rounded-lg" onSubmit={handleSubmit}>
					<h1 className="text-4xl text-center mb-5">Login</h1>
					<div className="flex flex-col gap-3">
						<Input
							value={loginValue}
							onChange={onLoginChange}
							error={isLoginError && isSubmitted}
							errorText={REQUIRED_ERROR}
							name="login"
							placeholder="Enter Your Login"
							label="Login"
						/>
						<Input
							value={passwordValue}
							onChange={onPasswordChange}
							type="password"
							error={isPasswordError && isSubmitted}
							errorText={REQUIRED_ERROR}
							name="password"
							placeholder="Enter Your Password"
							label="Password"
						/>
						<Button type="submit" className="mt-2">
							Login
						</Button>
					</div>
				</form>
			</Wrapper>
		</>
	);
};
