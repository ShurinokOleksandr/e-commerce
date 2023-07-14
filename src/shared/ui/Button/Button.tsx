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
            secondary: [
                'bg-light-third w-12 ml-4  hover:bg-hover-third',
            ],
        },
        size: {
            large: ['w-full h-full'],
            medium: ['w-52 h-12'],
            small: ['w-20  h-10'],
            full: ['w-full'],
        },
    },
    defaultVariants: {
        variant: 'primary',
        size: 'medium',
    },
});

interface ButtonProps extends ReactTagProps<'button'>, VariantProps<typeof button> {
    icon?:React.ReactNode;
    position?:boolean;
    className?:string;
    loading?:boolean;
    name?:string;
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
                    <span className="block mr-1">
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
                    <span className="block ml-1">
                        {icon}
                    </span>
                )
            }
        </button>
    );
}
export default Button;
