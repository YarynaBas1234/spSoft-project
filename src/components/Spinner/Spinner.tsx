import { CSSProperties } from 'react';
import { ClipLoader } from 'react-spinners';
import { twMerge } from 'tailwind-merge';

type SpinnerProps = {
	color?: string;
	loading: boolean;
	size?: number;
	className?: string;
	style?: CSSProperties;
};

export const Spinner: React.FC<SpinnerProps> = ({ color = '#4169e1', loading, style, size, className }) => {
	return (
		<div className={twMerge('flex items-center justify-center h-full', className)} style={style}>
			<ClipLoader color={color} loading={loading} size={size} />
		</div>
	);
};
