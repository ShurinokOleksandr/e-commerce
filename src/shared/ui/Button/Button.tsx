import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';

const button = cva('flex items-center justify-center p-2 rounded-2xl transition ', {
    variants: {
        variant: {
            third: [
                ' bg-white border-2 hover:bg-primary text-dark-primary font-semibold hover:text-dark-primary',
            ],
            primary: [
                'text-dark-primary  hover:bg-light-secondary hover:text-secondary ',
            ],
            addCart: ' bg-white text-secondary border hover:bg-secondary hover:text-white  border-secondary ',
            quantity: 'flex m-0 items-center justify-center rounded-full bg-light-primary hover:bg-primary ',
            secondary: [
                'bg-light-third w-12   hover:bg-hover-third',
            ],
        },
        size: {
            small: ['w-30  h-10 text-sm'],
            large: ['w-full h-full'],
            medium: ['w-52 h-12'],
            rounded: ['w-7 h-7'],
            full: ['w-full'],
        },
    },
    defaultVariants: {
        variant: 'primary',
        size: 'medium',
    },
});

interface ButtonProps extends ReactTagProps<'button'>, VariantProps<typeof button> {
    name?:string;
    loading?:boolean;
    className?:string;
    position?:boolean;
    icon?:React.ReactNode;
}
function Button({
    className, position, variant, loading, onClick, icon, size, name,
}:ButtonProps) {
    return (
        <button
            className={button({ className, variant, size })}
            onClick={onClick}
            type="button"
        >
            {/* Icon Button */}
            {
                position === true && (
                    <span className={`block ${variant === 'quantity' ? '' : 'mr-1'}`}>
                        {icon}
                    </span>
                )
            }
            {/* Text Button */}
            <span className="block">
                {name}
            </span>
            {/* Icon Button */}
            {
                position === false && (
                    <span className={`block ${variant === 'quantity' ? '' : 'ml-1'}`}>
                        {icon}
                    </span>
                )
            }
        </button>
    );
}
export default Button;
