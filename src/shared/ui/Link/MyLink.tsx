import React from 'react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { LinkProps } from 'next/dist/client/link';

interface MyLinkProps extends LinkProps {
    className?:string
    name:string;
}
function MyLink({ className, name, href }:MyLinkProps) {
    return <Link className={twMerge('text-dark-primary p-2 rounded-2xl transition hover:bg-light-secondary hover:text-secondary', className)} href={href}>{name}</Link>;
}

export default MyLink;
