import { twMerge } from 'tailwind-merge';

interface IButtonProps
	extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

export const Button: React.FC<IButtonProps> = props => {
	const { children, className, ...restProps } = props;

	return (
		<button
			className={twMerge(
				'bg-comp-blue text-white rounded px-5 py-3 text-[18px] font-semibold',
				'hover:bg-comp-dark-blue',
				'disabled:bg-comp-gray',
				className
			)}
			{...restProps}
		>
			{children}
		</button>
	);
};
