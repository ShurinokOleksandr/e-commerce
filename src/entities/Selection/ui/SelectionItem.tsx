import { twMerge } from 'tailwind-merge';
import React from 'react';

export function SelectionItem({ className, children, onClick }:ReactTagProps<'li'>) {
    return (
        <li
            className={twMerge(className, 'transform active:scale-75 transition-transform hover:bg-amber-200 cursor-pointer rounded-2xl p-2')}
            onClick={onClick}
        >
            {children}
        </li>
    );
}
