import StoreInitializer from '@/entities/ProductGrid/model/StoreInitializer';
import { useProductStore } from '@/entities/ProductGrid/model/store';
import { FormFilterProducts } from '@/features/FormFilterProducts';
import { SelectedFilters } from '@/features/SelectedFilters';
import { SearchParams } from '@/shared/types/SearchParams';
import { getPagination } from '@/action/getPagination';
import { GridProduct } from '@/entities/ProductGrid';
import { Selection } from '@/entities/Selection';
import React from 'react';

export default async function Page({ searchParams }:{ searchParams:SearchParams }) {
    await getPagination(searchParams);

    const itemTest = useProductStore.getState().ProductItems;

    return (
        <div className="flex my-5 disabled:bg-gray-800 ">
            <StoreInitializer products={itemTest} />
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
                    paginateUrl="/product?offset="
                    paginateItems={itemTest}
                />
            </section>
        </div>

    );
}
