'use client';

import { CheckboxFilterList, partsManufactures, pcManufactures } from '@/entities/CheckboxFilter';
import MultiRangeSlider from '@/shared/ui/MultiRange/MultiRangeSlider';
import React, { useEffect, useState } from 'react';

export function FormFilterProducts() {
    return (
        <form method="post">
            <div className="flex flex-col gap-y-10">
                <CheckboxFilterList listFilters={pcManufactures} name="Категория товаров" />
                {/* eslint-disable-next-line react/jsx-no-undef */}
                {/* <MultiRangeSlider max={100} min={0} /> */}
                <CheckboxFilterList listFilters={partsManufactures} name="Категория запчастей" />
            </div>
        </form>
    );
}
