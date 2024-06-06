import React from 'react';
import { twMerge } from 'tailwind-merge';

interface IButtonIconProps
	extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	icon: React.ReactNode;
}

export const ButtonIcon: React.FC<IButtonIconProps> = props => {
	const { icon, className, ...restProps } = props;

	return (
		<button className={twMerge(className)} {...restProps}>
			{icon}
		</button>
	);
};
