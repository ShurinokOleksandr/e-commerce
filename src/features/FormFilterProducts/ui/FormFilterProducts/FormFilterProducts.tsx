import { CheckboxFilterList, partsManufactures, pcManufactures } from '@/entities/CheckboxFilter';
import React from 'react';

export function FormFilterProducts() {
    return (
        <form method="post">
            <div className="flex flex-col gap-y-10">
                <CheckboxFilterList listFilters={pcManufactures} name="Категория товаров" />
                {/* <MultiRangeSlider min={0} max={100} /> */}
                <CheckboxFilterList listFilters={partsManufactures} name="Категория запчастей" />
            </div>
        </form>
    );
}
