import { VariantProps, cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import React from 'react';

const button = cva('p-2 transform active:scale-75 transition-transform  flex items-center gap-x-1 justify-center  rounded-2xl transition ', {
    variants: {
        variant: {
            third: 'flex bg-white border-2 hover:bg-primary text-dark-primary font-semibold hover:text-dark-primary',
            addCart: ' bg-white text-secondary border hover:bg-secondary hover:text-white  border-secondary ',
            quantity: 'flex m-0 items-center justify-center rounded-full bg-light-primary hover:bg-primary ',
            primary: 'text-dark-primary  hover:bg-light-secondary hover:text-secondary ',
            submit: 'bg-dark-secondary text-light-primary hover:bg-dark-primary',
            secondary: 'bg-light-third w-12   hover:bg-hover-third',
            swiper: 'bg-white ',
            none: '',
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
    className?:string;
    position?:boolean;
    icon?:React.ReactNode;
}
function Button({
    className, position, disabled, variant, onClick, icon, size, name, ...props
}:ButtonProps) {
    const isDisabled = `block ${disabled && 'opacity-10'}`;
    return (
        <button
            className={twMerge(button({ className, variant, size }))}
            disabled={disabled}
            onClick={onClick}
            {...props}
        >
            {/* Icon Button */}
            {
                position === true && (
                    <div className={` ${isDisabled} `}>
                        {icon}
                    </div>
                )
            }
            {/* Text Button */}
            {name && (
                <div>
                    {name}
                </div>
            )}
            {/* Icon Button */}
            {
                position === false && (
                    <div>
                        {icon}
                    </div>
                )
            }
        </button>
    );
}
export default Button;
