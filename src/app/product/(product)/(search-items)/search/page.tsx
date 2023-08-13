import { FormFilterProducts } from '@/features/FormFilterProducts';
import { SelectedFilters } from '@/features/SelectedFilters';
import { SearchParams } from '@/shared/types/SearchParams';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { GridProduct } from '@/entities/ProductGrid';
import { Selection } from '@/entities/Selection';
import Button from '@/shared/ui/Button/Button';
import { getSearch } from '@/action/getSearch';
import React from 'react';

export default async function Page({ searchParams }:{ searchParams:SearchParams }) {
    const paginateItems = await getSearch(searchParams.name);
    return (
        <div className="flex my-5 disabled:bg-gray-800 ">
            <aside className="w-[270px]">
                <FormFilterProducts />
            </aside>
            <section className="w-full">
                <div className="mb-5">
                    <div className="flex justify-between bg-light-primary rounded p-3 w-full">
                        <Selection />
                        <SelectedFilters />
                    </div>
                </div>
                <GridProduct
                    paginateUrl="/product/search="
                    paginateItems={paginateItems}
                    searchParams={searchParams}
                />
            </section>
        </div>
    );
}
