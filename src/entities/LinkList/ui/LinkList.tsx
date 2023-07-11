import React from 'react';
import { twMerge } from 'tailwind-merge';
import Button from '@/shared/ui/Button/Button';
import { Links } from '../model/links';

interface LinkListProps {
    className:string;
}
export function LinkList({ className }:LinkListProps) {
    return (

        <div className={twMerge('w-full mx-auto flex items-center justify-center', className)}>
            {
                Links.map((link) => (
                    <Button
                        key={link.path}
                        position={link.position}
                        className="mx-5"
                        name={link.text}
                        icon={link.icon}
                    />
                ))
            }
        </div>
    );
}
