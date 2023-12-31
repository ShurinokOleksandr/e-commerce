import { LinkProps } from 'next/dist/client/link';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';
import React from 'react';

interface MyLinkProps extends LinkProps {
    className?:string
    name:string;
}
function MyLink({ className, name, href }:MyLinkProps) {
    return <Link className={twMerge('w-max text-dark-primary py-1 px-2 rounded-2xl transition hover:bg-light-secondary hover:text-secondary', className)} href={href}>{name}</Link>;
}

export default MyLink;
