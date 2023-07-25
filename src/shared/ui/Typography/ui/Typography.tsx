import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';

const typography = cva('py-1', {
    variants: {
        variant: {
            primary: [
                'text-dark-primary',
            ],
            secondary: [
                'text-secondary',
            ],
            semibold: 'text-dark-primary text-xs font-semibold',
            stock: 'inline text-stock font-bold bg-lime-200',
            hot: 'text-hot-price font-bold',
            third: [

            ],
        },
        size: {
            md: ['text-xl font-semibold'],
            sm: ['text-base'],
            lg: ['text-2xl'],
            xs: ['text-sm'],
        },
        position: {
            center: 'text-center',
        },
    },
    defaultVariants: {
        variant: 'primary',
        size: 'sm',
    },
});

interface TypographyProps extends ReactTagProps<'p'>, VariantProps<typeof typography> {
    className?:string;
    text:undefined | number | string;
}
function Typography({
    className, position, variant, text, size,
}:TypographyProps) {
    return (
        <p
            className={typography({
                className, position, variant, size,
            })}
        >
            {text}
        </p>
    );
}

export default Typography;
