import { ReactNode } from 'react';

interface ICheckboxProps
	extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type'> {
	label?: ReactNode;
}

export const Checkbox: React.FC<ICheckboxProps> = props => {
	const { label, ...restProps } = props;

	return (
		<div className="flex gap-2">
			<input type="checkbox" {...restProps} />
			{label && <label>{label}</label>}
		</div>
	);
};
