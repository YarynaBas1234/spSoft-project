import React from 'react';
import { twMerge } from 'tailwind-merge';
import { IoMdEyeOff, IoIosEye } from 'react-icons/io';

interface IInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	label?: string;
	wrapperClassName?: string;
	type?: 'text' | 'password' | 'email' | 'number';
	error?: boolean;
	errorText?: string;
}

export const Input: React.FC<IInputProps> = props => {
	const { className, wrapperClassName, label, type = 'text', error, errorText, disabled, ...restProps } = props;
	const [openEye, setOpenEye] = React.useState(false);

	const isPasswordField = type === 'password';

	const getValidatedType = () => {
		if (isPasswordField) {
			if (openEye) {
				return 'text';
			}
			return 'password';
		}
		return type;
	};

	return (
		<div className={twMerge('flex flex-col w-full', wrapperClassName)}>
			{label && <label className="text-xl mb-1">{label}</label>}
			<div className="relative flex items-center">
				<input
					className={twMerge(
						'w-full border bg-comp-light-gray border-comp-mid-gray rounded-lg text-comp-gray text-[16px] outline-0',
						'placeholder:text-comp-mid-gray',
						'py-[10px] px-4 h-[55px]',
						error && errorText && 'border-comp-orange',
						isPasswordField && 'pr-[55px]',
						disabled && 'bg-comp-mid-gray pointer-events-none bg-opacity-25',
						className
					)}
					type={getValidatedType()}
					{...restProps}
				/>

				{isPasswordField && (
					<span className="absolute right-5 cursor-pointer">
						{openEye ? (
							<IoIosEye size={30} onClick={() => setOpenEye(!openEye)} />
						) : (
							<IoMdEyeOff size={30} onClick={() => setOpenEye(!openEye)} />
						)}
					</span>
				)}
			</div>
			{error && errorText && <span className="text-comp-orange mt-1">{errorText}</span>}
		</div>
	);
};
