import React from 'react';
import MyLink from '@/shared/ui/Link/MyLink';
import { twMerge } from 'tailwind-merge';
import Button from '@/shared/ui/Button/Button';

interface LinkListProps {
    className:string;
}
export function LinkList({ className }:LinkListProps) {
    return (

        <div className={twMerge('w-full  mx-auto flex items-center justify-center', className)}>
            {/* <MyLink href="/main" name="ГЛАВНАЯ" /> */}
            {/* <MyLink href="/catalog" name="КАТАЛОГ" /> */}
            {/* <MyLink href="/about" name="О НАС" /> */}
            {/* <MyLink href="/cart" name="КОРЗИНА" /> */}
            <Button className="s" name="name test" />
        </div>
    );
}
