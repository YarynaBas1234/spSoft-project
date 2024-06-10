import React from 'react';
import { createPortal } from 'react-dom';
import { twMerge } from 'tailwind-merge';

import { Spinner } from 'components';

type OverlayLoaderProps = {
	show: boolean;
	opacity?: number;
	className?: string;
	overlayClassName?: string;
};

export const OverlayLoader = ({ show, className, opacity = 0.5, overlayClassName }: OverlayLoaderProps) => {
	const portalContainer = document.createElement('div');
	portalContainer.classList.add('relative');

	React.useEffect(() => {
		document.body.appendChild(portalContainer);
		return () => {
			document.body.removeChild(portalContainer);
		};
	}, [portalContainer]);

	if (!show) return null;

	return createPortal(
		<div className={twMerge('fixed top-0 left-0 z-50 h-screen w-screen', className)}>
			<div className={twMerge('absolute top-0 left-0 h-full w-full bg-black', overlayClassName)} style={{ opacity }} />
			<Spinner size={100} loading={show} />
		</div>,
		portalContainer
	);
};
