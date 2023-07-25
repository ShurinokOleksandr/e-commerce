'use client';

import Crumb from '@/shared/ui/Crumb/ui/Crumb';
import { usePathname } from 'next/navigation';
import React, { useMemo } from 'react';
import Link from 'next/link';

interface BreadCrumbsProps {
    name:string;
}

export function BreadCrumbs({ name }:BreadCrumbsProps) {
    const path = usePathname();
    const crumbs = useMemo(() => {
        const pathArray = path.split('/');
        const lastIndex = pathArray.length - 1;
        pathArray[lastIndex] = name;
        return pathArray.filter((item) => item.length > 0);
    }, []);
    return (
        <div className="h-10 flex items-center text-sm gap-2 ">
            <Link href="/">
                HOME
                &gt;
            </Link>
            {
                crumbs.map((item, index) => (
                    <Crumb
                        lastIndex={index === crumbs.length - 1}
                        link="/about"
                        name={item}
                        key={item}
                    />
                ))
            }
        </div>
    );
}
