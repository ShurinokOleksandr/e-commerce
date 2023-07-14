'use client';

import { ShoppingCartIcon, Bars3Icon, UserIcon } from '@heroicons/react/24/outline';
import IconButton from '@/shared/ui/IconButton/IconButton';
import { LinkList } from '@/entities/LinkList';
import { Logo } from '@/shared/ui/Logo/Logo';
import { Drawer } from '@/entities/Drawer';
import { Search } from '@/features/Search';
import React, { useState } from 'react';

export function Header() {
    const [isDrawer, setIsDrawer] = useState(false);

    const handleClickOpenDrawer = () => {
        setIsDrawer(true);
    };

    return (
        <header className="max-w-[1140px] w-[90%] xl:max-w-[1300px] xl:w-[90%] mx-auto pt-10 ">
            <section className="flex items-center justify-between color-blue">
                <Logo className="w-[170px] flex flex-col" />
                <Search />
                <section className="hidden md:flex items-center">
                    <IconButton
                        icon={<UserIcon width={20} />}
                        variant="primary"
                    />
                    <span className="ml-3">0.00$</span>
                    <div className="bg-light-third w-12 h-12 ml-4 flex items-center justify-center border rounded-full hover:bg-hover-third">
                        <ShoppingCartIcon stroke="#ea2b0f" width={18} />
                    </div>
                </section>
                <IconButton
                    onClick={handleClickOpenDrawer}
                    icon={<Bars3Icon width={25} />}
                    className="block md:hidden"
                    variant="primary"
                />
            </section>
            <LinkList className="hidden md:flex mt-5  text-primary font-semibold" />
            <Drawer
                setIsDrawer={setIsDrawer}
                isDrawer={isDrawer}
            />
        </header>
    );
}
