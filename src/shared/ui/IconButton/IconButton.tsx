import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

// interface IconButtonProps extends ReactTagProps<'button'>, VariantProps<typeof iconButton> {
//     className:string;
// }
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof iconButton> {
    className?:string;
    icon:React.ReactNode;
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
    className, variant, size, icon, onClick,
} :IconButtonProps) {
    return (
        <button
            onClick={onClick}
            type="button"
            className={iconButton({ variant, size, className })}
        >
            {icon}
        </button>
    );
}

export default IconButton;
