import {
    BanknotesIcon, BookOpenIcon, BeakerIcon, HomeIcon,
} from '@heroicons/react/24/outline';
import React from 'react';

export interface LinksType {
    position:boolean;
    text:string;
    path:string;
    icon:any;
}

export const Links: LinksType[] = [
    {
        icon: <HomeIcon width={20} />,
        text: 'ГЛАВНАЯ',
        position: true,
        path: '/',
    },
    {
        icon: <BeakerIcon width={20} />,
        path: '/product',
        text: 'КАТАЛОГ',
        position: false,
    },
    {
        icon: <BookOpenIcon width={20} />,
        position: false,
        path: '/about',
        text: 'О НАС',
    },
    {
        icon: <BanknotesIcon width={20} />,
        text: 'КОРЗИНА',
        position: false,
        path: '/cart',
    },
];
