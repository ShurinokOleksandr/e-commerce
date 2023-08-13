'use client';

import { useGetParams } from '@/shared/hooks/useGetParams';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Button from '@/shared/ui/Button/Button';
import React from 'react';

export function SelectedFilters() {
    const { parts, pc } = useGetParams();
    console.log(pc);
    return (
        <div className="flex gap-4 items-center flex-wrap justify-start w-3/4">
            <Button icon={<XMarkIcon width={20} />} name="Clear all" variant="third" size="small" className="" position />
            <Button icon={<XMarkIcon width={20} />} name="Clear all" variant="third" size="small" position />
            <Button icon={<XMarkIcon width={20} />} name="Clear all" variant="third" size="small" position />
            <Button icon={<XMarkIcon width={20} />} name="Clear all" variant="third" size="small" position />

            <Button icon={<XMarkIcon width={20} />} name="Clear all" variant="third" size="small" position />
            <Button icon={<XMarkIcon width={20} />} name="Clear all" variant="third" size="small" position />
            <Button icon={<XMarkIcon width={20} />} name="Clear all" variant="third" size="small" position />
            <Button icon={<XMarkIcon width={20} />} name="Clear all" variant="third" size="small" position />

        </div>
    );
}
