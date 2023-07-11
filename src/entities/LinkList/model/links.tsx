import {
    BanknotesIcon, BeakerIcon, BookOpenIcon, HomeIcon,
} from '@heroicons/react/24/outline';
import React from 'react';

export interface LinksType {
    position:boolean;
    path:string;
    icon:any;
    text:string;
}

export const Links: LinksType[] = [
    {
        position: true,
        path: '/',
        icon: <HomeIcon width={20} />,
        text: 'ГЛАВНАЯ',
    },
    {
        position: false,
        path: '/catalog',
        icon: <BeakerIcon width={20} />,
        text: 'КАТАЛОГ',
    },
    {
        position: false,
        path: '/about',
        icon: <BookOpenIcon width={20} />,
        text: 'О НАС',
    },
    {
        position: false,
        path: '/cart',
        icon: <BanknotesIcon width={20} />,
        text: 'КОРЗИНА',
    },
];
