import Button from '@/shared/ui/Button/Button';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';
import React from 'react';

import { Links } from '../model/links';

interface LinkListProps {
    className:string;
}
export function LinkList({ className }:LinkListProps) {
    return (

        <div className={twMerge('w-full mx-auto flex items-center justify-center', className)}>
            {
                Links.map((link) => (
                    <Link href={link.path} key={link.path}>
                        <Button
                            position={link.position}
                            className="mx-5"
                            name={link.text}
                            icon={link.icon}
                        />
                    </Link>
                ))
            }
        </div>
    );
}
