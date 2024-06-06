import { twMerge } from 'tailwind-merge';

interface IInputProps
	extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type'> {
	label?: string;
	wrapperClassName?: string;
}

export const Input: React.FC<IInputProps> = props => {
	const { className, wrapperClassName, label, ...restProps } = props;

	return (
		<div className={twMerge('inline-flex flex-col gap-2', wrapperClassName)}>
			{label && <label>{label}</label>}
			<input
				className={twMerge(
					'border bg-comp-light-gray border-comp-mid-gray rounded-lg text-comp-gray text-[16px] outline-0',
					'placeholder:text-comp-mid-gray',
					'py-[10px] px-4 h-[55px]',
					className
				)}
				{...restProps}
			/>
		</div>
	);
};
