'use client';

import { useSelectedStore } from '@/features/SelectedFilters/model/useSelectedStore';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Button from '@/shared/ui/Button/Button';
import React from 'react';

export function SelectedFilters() {
    const selectedItems = useSelectedStore((state) => state.selectedItems);
    const removeItem = useSelectedStore((state) => state.removeItem);

    return (
        <div className="flex gap-4 items-center flex-wrap justify-start w-3/4">
            {
                selectedItems.map((item) => (
                    <Button
                        onClick={() => removeItem(item)}
                        icon={<XMarkIcon width={20} />}
                        className="text-[14px]"
                        variant="third"
                        size="small"
                        name={item}
                        position
                    />
                ))
            }
        </div>
    );
}
