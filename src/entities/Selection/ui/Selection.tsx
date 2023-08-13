'use client';

import { SelectionLinks } from '@/entities/Selection/lib/SelectionLinks';
import { SelectionItem } from '@/entities/Selection/ui/SelectionItem';
import { useElementClick } from '@/shared/hooks/useElementClick';
import { useSetPaginate } from '@/shared/hooks/useSetPaginate';
import { ArrowDownIcon } from '@heroicons/react/24/outline';
import { useGetParams } from '@/shared/hooks/useGetParams';
import Button from '@/shared/ui/Button/Button';
import React, { useState } from 'react';

export function Selection() {
    const [visible, setVisible] = useState(false);

    const ref = useElementClick([() => setVisible(false)]);

    const { parts, pc } = useGetParams();

    const setSortByCategories = useSetPaginate();

    return (
        <div className="relative">
            <Button
                onClick={() => setVisible(!visible)}
                icon={<ArrowDownIcon width={15} />}
                name="Сортировать по"
                position={false}
            />
            {
                visible
                    ? (
                        <div className="absolute z-50 w-72 rounded-md border-2 shadow-2xl bg-white px-5 py-4" ref={ref}>
                            <ul className="flex flex-col gap-y-5" onClick={() => setVisible(false)}>
                                {
                                    SelectionLinks.map((item) => (
                                        <SelectionItem
                                            onClick={() => setSortByCategories(`${item.link}${pc}${parts}`)}
                                        >
                                            {item.name}
                                        </SelectionItem>
                                    ))
                                }
                            </ul>
                        </div>
                    )
                    : <></>
            }
        </div>
    );
}
