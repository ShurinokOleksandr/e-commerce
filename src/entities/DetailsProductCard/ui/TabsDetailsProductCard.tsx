import Typography from '@/shared/ui/Typography/ui/Typography';
import Button from '@/shared/ui/Button/Button';
import { twMerge } from 'tailwind-merge';
import React, { useState } from 'react';

function TabsDetailsProductCard() {
    const [isDescription, setIsDecription] = useState(true);
    const [isCompatibility, setIsCompatibility] = useState(false);

    const handleDescription = () => {
        setIsDecription(true);
        setIsCompatibility(false);
    };
    const handleCompatibility = () => {
        setIsDecription(false);
        setIsCompatibility(true);
    };
    return (
        <div className="animate-fade">
            <ul className="flex divide-x-2  divide-amber-600 gap-x-3">
                <li
                    className={twMerge(` ${isDescription ? 'font-bold' : 'font-light'}`)}
                    onClick={handleDescription}
                >
                    Описание
                </li>
                <li
                    className={twMerge(`px-2  ${isCompatibility ? 'font-bold' : 'font-light'}`)}
                    onClick={handleCompatibility}
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
