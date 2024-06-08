import React from 'react'
import { twMerge } from 'tailwind-merge';

interface IWrapper {
    children: React.ReactNode;
    className?: string;
}

export const Wrapper: React.FC<IWrapper> = (props) => {
    const { children, className } = props;

  return (
    <div className={twMerge('max-w-[1200px] w-full px-10 mx-auto', className)}>
        {children}
    </div>
  )
}
