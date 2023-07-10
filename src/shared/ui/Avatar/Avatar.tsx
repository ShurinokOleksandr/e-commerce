import React from 'react';
import { UserIcon } from '@heroicons/react/24/outline';
import { twMerge } from 'tailwind-merge';

interface AvatarProps {
    className?:string
}
export function Avatar({ className }:AvatarProps) {
    return (
        <div onMouseEnter={() => console.log('over avatar')} className={twMerge('w-[50px] h-[50px] flex items-center justify-center border rounded-full hover:bg-light-primary', className)}>
            <UserIcon width={18} />
        </div>
    );
}
