'use client';

import Typography from '@/shared/ui/Typography/ui/Typography';
import { twMerge } from 'tailwind-merge';
import React, { useState } from 'react';

function TabsDetailsProductCard() {
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
                            text="lorem100lorem100lorem 100lorem100lo rem100lorem00lorem100lo rem100lom100 rem100lorem100 rem100lorem100 rem100lorem100 rem100lorem100 rem100lorem100 rem100lorem100 rem100lorem100 lorem100"
                            size="sm"
                        />
                    )
                    : <Typography text="lorem1lorem100 rrem100 lorem100" size="sm" />
            }

        </div>
    );
}

export default TabsDetailsProductCard;
