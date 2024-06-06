import { twMerge } from 'tailwind-merge';

interface IInputProps
	extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type'> {
	label?: string;
	wrapperClassName?: string;
}

export const Input: React.FC<IInputProps> = props => {
	const { className, wrapperClassName, disabled, label, ...restProps } = props;

	return (
		<div className={twMerge('inline-flex flex-col gap-2', wrapperClassName)}>
			{label && <label>{label}</label>}
			<input className={twMerge(className)} {...restProps} />
		</div>
	);
};
