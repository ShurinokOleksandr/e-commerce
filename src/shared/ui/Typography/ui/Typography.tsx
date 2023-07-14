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
            hot: 'text-hot-price font-bold',
            stock: 'text-stock font-bold',
            third: [

            ],
        },
        size: {
            md: ['text-xl font-semibold'],
            sm: ['text-base'],
            xs: ['text-sm'],
            lg: [],
        },
    },
    defaultVariants: {
        variant: 'primary',
        size: 'md',
    },
});

interface TypographyProps extends ReactTagProps<'p'>, VariantProps<typeof typography> {
    className?:string;
    text:string;
}
function Typography({
    className, variant, size, text,
}:TypographyProps) {
    return (
        <p
            className={typography({ className, variant, size })}
        >
            {text}
        </p>
    );
}

export default Typography;
