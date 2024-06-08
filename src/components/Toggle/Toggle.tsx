import React from 'react';
import Switch from 'react-switch';

interface IToggleProps {
	checked: boolean;
	onChange: () => void;
	label?: string;
	onColor?: string;
}

const defaultColor = '#004eda';

export const Toggle: React.FC<IToggleProps> = props => {
	const { checked, onChange, label, onColor = defaultColor } = props;

	return (
		<div className="flex items-center h-12">
			<label className="h-14 flex items-center gap-2">
				{label && <span>{label}</span>}
				<Switch onColor={onColor} onChange={onChange} checked={checked} />
			</label>
		</div>
	);
};
