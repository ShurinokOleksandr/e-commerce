import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { VariantProps, cva } from 'class-variance-authority';
import IconButton from '@/shared/ui/IconButton/IconButton';
import { ProductType } from '@/entities/Product';
import { twMerge } from 'tailwind-merge';
import React from 'react';

const input = cva('block relative rounded-md', {
    variants: {
        variant: {
            primary: ['bg-light-primary text-dark-primary placeholder-primary p-4'],
        },
        inputWidth: {
            full: ['w-full'],
        },
    },
    defaultVariants: {
        variant: 'primary',
        inputWidth: 'full',
    },
});
interface InputProps extends ReactTagProps<'input'>, VariantProps<typeof input> {
    className?:string;
    onClear:() => void
    searchData:ProductType[]
    searchButton:React.ReactNode;
}

export function Input({
    searchButton, placeholder, searchData, inputWidth, className, onChange, variant, onClear, value,
}:InputProps) {
    return (
        <div className={twMerge(' flex sm:block justify-end relative', className)}>
            <div className="hidden sm:block">
                <input
                    className={input({ inputWidth, className, variant })}
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                />
                {searchButton}
                {
                    (value || searchData.length !== 0)
                        ? (
                            <XMarkIcon
                                className="absolute top-1/2 right-14 transform -translate-y-1/2 hover:cursor-pointer"
                                onClick={onClear}
                                width={25}
                            />
                        )
                        : <></>
                }

            </div>
            <IconButton
                icon={<MagnifyingGlassIcon width={20} />}
                className="block sm:hidden"
            />
        </div>

    );
}
