import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof iconButton> {
    icon:React.ReactNode;
    className?:string;
}

const iconButton = cva(' flex items-center justify-center border rounded-full hover:bg-light-primary', {
    variants: {
        variant: {
            primary: [
                'rounded-full',
                'hover:bg-blue-600',
            ],
            secondary: [
                'bg-light-third w-12 ml-4  hover:bg-hover-third',
            ],
        },
        size: {
            large: ['w-[100px] h-[100px]'],
            medium: ['w-[50px] h-[50px]'],
        },
    },
    defaultVariants: {
        variant: 'primary',
        size: 'medium',
    },
});
function IconButton({
    className, onClick, variant, icon, size,
} :IconButtonProps) {
    return (
        <button
            className={iconButton({ className, variant, size })}
            onClick={onClick}
            type="button"
        >
            {icon}
        </button>
    );
}

export default IconButton;
