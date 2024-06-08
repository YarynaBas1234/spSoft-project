import React from 'react';

export const useLoginFieldsState = () => {
	const [value, setValue] = React.useState('');
	const [error, setError] = React.useState(true);

	const onChange: React.ChangeEventHandler<HTMLInputElement> = e => {
		setValue(e.target.value);

		if (e.target.value?.trim()) {
			setError(false);
			return;
		}

		setError(true);
	};

	return {
		error,
		value,
		onChange,
	};
};
