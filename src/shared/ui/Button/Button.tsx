import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const button = cva('', {
    variants: {
        variant: {
            primary: [
                'text-dark-primary p-2 rounded-2xl transition hover:bg-light-secondary hover:text-secondary',
            ],
            secondary: [
                'bg-light-third w-12 ml-4  hover:bg-hover-third',
            ],
            third: [
                '',
            ],
        },
        size: {
            large: ['w-full h-full'],
            medium: ['w-1500  h-50'],
        },
    },
    defaultVariants: {
        variant: 'primary',
        size: 'medium',
    },
});

interface ButtonProps extends ReactTagProps<'button'>, VariantProps<typeof button> {
    className:string;
    loading?:boolean;
    name:string;
}
function Button({
    className, onClick, name, loading, variant, size,
}:ButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={button({ className, variant, size })}
        >
            {name}
        </button>
    );
}

export default Button;
