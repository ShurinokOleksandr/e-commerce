import { UserIcon } from '@heroicons/react/24/outline';
import { twMerge } from 'tailwind-merge';
import React from 'react';

interface AvatarProps {
    className?:string
}
export function Avatar({ className }:AvatarProps) {
    return (
        <div className={twMerge('w-[50px] h-[50px] flex items-center justify-center border rounded-full hover:bg-light-primary', className)} onMouseEnter={() => console.log('over avatar')}>
            <UserIcon width={18} />
        </div>
    );
}
