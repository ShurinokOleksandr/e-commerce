'use client';

import { useElementClick } from '@/shared/hooks/useElementClick';
import { ArrowDownIcon } from '@heroicons/react/24/outline';
import Button from '@/shared/ui/Button/Button';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export function Selection() {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useElementClick([() => setIsOpen(false)]);
    const router = useRouter();
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
                        <div className="absolute z-50 w-72 rounded-md border-2 shadow-2xl bg-white px-5 py-4" ref={ref}>
                            <ul className="flex flex-col gap-y-5">
                                <li
                                    className="transform active:scale-75 transition-transform hover:bg-amber-200 cursor-pointer rounded-2xl p-2"
                                    onClick={() => router.push('/product?sortBy=popularity')}
                                >
                                    Популярные
                                </li>
                                <li
                                    className="transform active:scale-75 transition-transform hover:bg-amber-200 cursor-pointer rounded-2xl p-2"
                                    onClick={() => router.push('/product?sortBy=new')}
                                >
                                    Новейшие
                                </li>
                                <li
                                    className="transform active:scale-75 transition-transform hover:bg-amber-200 cursor-pointer rounded-2xl p-2"
                                    onClick={() => router.push('/product?sortBy=cheap')}
                                >
                                    Сначала дешёвые
                                </li>
                                <li
                                    className="transform active:scale-75 transition-transform hover:bg-amber-200 cursor-pointer rounded-2xl p-2"
                                    onClick={() => router.push('/product?sortBy=expensive')}
                                >
                                    Сначала дорогие
                                </li>
                            </ul>
                        </div>
                    )
                    : <></>
            }
        </div>
    );
}
