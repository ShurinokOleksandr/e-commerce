import React from 'react';
import { twMerge } from 'tailwind-merge';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import IconButton from '@/shared/ui/IconButton/IconButton';

interface InputProps {
    className?:string
}

export function Input({ className }:InputProps) {
    return (
        <div className={twMerge(' flex sm:block justify-end relative', className)}>
            <div className="hidden sm:block">
                <input
                    placeholder="Поиск продуктов..."
                    className="w-full block relative bg-light-primary text-dark-primary placeholder-primary rounded-md p-4"
                />
                <MagnifyingGlassIcon
                    className="absolute top-1/2 right-5 transform -translate-y-1/2 hover:cursor-pointer"
                    width={20}
                />
            </div>
            <IconButton
                className="block sm:hidden"
                icon={<MagnifyingGlassIcon width={20} />}
            />
        </div>

    );
}
