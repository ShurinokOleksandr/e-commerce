import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import IconButton from '@/shared/ui/IconButton/IconButton';
import { twMerge } from 'tailwind-merge';
import React from 'react';

interface InputProps extends ReactTagProps<'input'> {
    className?:string
}

export function Input({ className }:InputProps) {
    return (
        <div className={twMerge(' flex sm:block justify-end relative', className)}>
            <div className="hidden sm:block">
                <input
                    className="w-full block relative bg-light-primary text-dark-primary placeholder-primary rounded-md p-4"
                    placeholder="Поиск продуктов..."
                />
                <MagnifyingGlassIcon
                    className="absolute top-1/2 right-5 transform -translate-y-1/2 hover:cursor-pointer"
                    width={20}
                />
            </div>
            <IconButton
                icon={<MagnifyingGlassIcon width={20} />}
                className="block sm:hidden"
            />
        </div>

    );
}
