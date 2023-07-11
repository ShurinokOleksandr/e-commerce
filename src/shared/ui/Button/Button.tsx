import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const button = cva('flex items-center justify-center p-2 rounded-2xl transition ', {
    variants: {
        variant: {
            primary: [
                'text-dark-primary  hover:bg-light-secondary hover:text-secondary ',
            ],
            secondary: [
                'bg-light-third w-12 ml-4  hover:bg-hover-third',
            ],
            third: [
                ' bg-white border-2 hover:bg-primary text-dark-primary font-semibold hover:text-dark-primary',
            ],
            addCart: 'block mx-auto bg-white text-secondary border hover:bg-secondary hover:text-white  border-secondary ',
        },
        size: {
            large: ['w-full h-full'],
            medium: ['w-150  h-12'],
            small: ['w-[80%]  h-10'],
        },
    },
    defaultVariants: {
        variant: 'primary',
        size: 'medium',
    },
});

interface ButtonProps extends ReactTagProps<'button'>, VariantProps<typeof button> {
    className?:string;
    loading?:boolean;
    name:string;
    icon?:React.ReactNode;
    position?:boolean;
}
function Button({
    className, onClick, name, loading, variant, size, icon, position,
}:ButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={button({ className, variant, size })}
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
