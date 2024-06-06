import { twMerge } from 'tailwind-merge';

interface IButtonProps
	extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

export const Button: React.FC<IButtonProps> = props => {
	const { children, className, ...restProps } = props;

	return (
		<button className={twMerge('rounded text-black', className)} {...restProps}>
			{children}
		</button>
	);
};
