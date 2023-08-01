'use client';

import { ArrowDownIcon } from '@heroicons/react/24/outline';
import Button from '@/shared/ui/Button/Button';
import React, { useState } from 'react';

export function Selection() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="relative">
            <Button
                icon={<ArrowDownIcon width={15} />}
                onClick={() => setIsOpen(!isOpen)}
                name="Сортировать по"
                position={false}
            />
            {
                isOpen
                    ? (
                        <div className="absolute z-50 w-72 rounded-md border-2 shadow-2xl bg-white px-10 py-8">
                            <ul className="flex flex-col gap-y-5">
                                <li>Sort by popularity</li>
                                <li>Sort by latest</li>
                                <li>Sort by price: low to high</li>
                                <li>Sort by price: high to low</li>
                            </ul>
                        </div>
                    )
                    : null
            }
        </div>
    );
}
