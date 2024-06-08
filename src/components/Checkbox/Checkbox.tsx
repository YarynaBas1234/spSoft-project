import React from 'react';
import { twMerge } from 'tailwind-merge';
import { FaCheck } from 'react-icons/fa6';

interface ICheckboxProps
	extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type'> {
	wrapperClassName?: string;
	label?: React.ReactNode;
}

export const Checkbox: React.FC<ICheckboxProps> = props => {
	const { label, wrapperClassName, disabled, checked, className, ...restProps } = props;

	return (
		<label
			className={twMerge(
				'flex gap-2 items-center w-fit text-[20px]',
				disabled ? 'text-comp-light-gray' : 'cursor-pointer',
				wrapperClassName
			)}
		>
			<div
				className={twMerge(
					'w-[30px] h-[30px] flex justify-center items-center rounded mt-[2px]',
					disabled && 'border border-comp-mid-gray',
					!disabled && (checked ? 'bg-comp-light-blue' : 'border border-comp-light-blue'),
					disabled && (checked ? 'bg-comp-mid-gray' : 'border-comp-mid-gray'),
					className
				)}
			>
				{checked && <FaCheck color="white" />}
			</div>
			<input style={{ display: 'none' }} type="checkbox" disabled={disabled} checked={checked} {...restProps} />
			{label && <span>{label}</span>}
		</label>
	);
};
