import Link from 'next/link';
import React from 'react';

interface CrumbProps {
    lastIndex:boolean;
    name:string;
    link:string;
}

function Crumb({ lastIndex, link, name }:CrumbProps) {
    return (
        <>
            {
                lastIndex
                    ? (
                        <Link href={link}>
                            {name.toUpperCase()}
                        </Link>
                    )
                    : (
                        <Link href={link}>
                            {name.toUpperCase()}
                            {' '}
                            &gt;
                        </Link>
                    )
            }
        </>
    );
}

export default Crumb;
