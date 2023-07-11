import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const typography = cva('py-1', {
    variants: {
        variant: {
            primary: [
                'text-dark-primary',
            ],
            secondary: [
                'text-secondary',
            ],
            third: [

            ],
            stock: 'text-stock font-bold',
            hot: 'text-hot-price font-bold',
        },
        size: {
            lg: [],
            md: ['text-xl font-bold'],
            sm: ['text-base'],
            xs: ['text-sm'],
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
