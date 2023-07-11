'use client';

import React, { useState } from 'react';
import { Bars3Icon, ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline';
import { Search } from '@/features/Search';
import IconButton from '@/shared/ui/IconButton/IconButton';
import { Drawer } from '@/entities/Drawer/ui/Drawer';
import { twMerge } from 'tailwind-merge';
import { Logo } from '@/shared/ui/Logo/Logo';
import { LinkList } from '../../../../entities/LinkList';

export function Header() {
    const [isDrawer, setIsDrawer] = useState(false);

    const handleClickOpenDrawer = () => {
        setIsDrawer(true);
    };

    return (
        <header className="">
            <section className="flex items-center justify-between color-blue">
                <Logo className="w-[170px] flex flex-col" />
                <Search />
                <section className="hidden md:flex items-center justirfy-end">
                    <IconButton
                        variant="primary"
                        icon={<UserIcon width={20} />}
                    />
                    <span className="ml-3">0.00$</span>
                    <div className="bg-light-third w-12 h-12 ml-4 flex items-center justify-center border rounded-full hover:bg-hover-third">
                        <ShoppingCartIcon stroke="#ea2b0f" width={18} />
                    </div>
                </section>
                <div className={twMerge(' ')}>
                    <IconButton
                        className="block md:hidden"
                        variant="primary"
                        icon={<Bars3Icon width={25} />}
                        onClick={handleClickOpenDrawer}
                    />
                </div>
            </section>
            <LinkList className="hidden md:flex mt-5  text-primary font-semibold" />
            <Drawer
                setIsDrawer={setIsDrawer}
                isDrawer={isDrawer}
            />
        </header>
    );
}
