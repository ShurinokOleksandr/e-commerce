'use client';

import Typography from '@/shared/ui/Typography/ui/Typography';
import { ProductType } from '@/entities/Product';
import { twMerge } from 'tailwind-merge';
import React, { useState } from 'react';

interface TabsDetailsProductCardProps {
    data:ProductType
}
function TabsDetailsProductCard({ data }:TabsDetailsProductCardProps) {
    const [isDescription, setIsDescription] = useState(true);
    const [isCompatibility, setIsCompatibility] = useState(false);

    const handleTabs = () => {
        setIsDescription(!isDescription);
        setIsCompatibility(!isCompatibility);
    };
    return (
        <div className="animate-fade">
            <ul className="flex divide-x-2  divide-amber-600 gap-x-3">
                <li
                    className={twMerge(` cursor-pointer ${isDescription ? 'font-bold' : 'font-light'}`)}
                    onClick={handleTabs}
                >
                    Описание
                </li>
                <li
                    className={twMerge(`px-2 cursor-pointer  ${isCompatibility ? 'font-bold' : 'font-light'}`)}
                    onClick={handleTabs}
                >
                    Совместимость
                </li>
            </ul>

            {
                isDescription
                    ? (
                        <Typography
                            text={data.compatibity}
                            size="sm"
                        />
                    )
                    : <Typography text={data.description} size="sm" />
            }

        </div>
    );
}

export default TabsDetailsProductCard;
