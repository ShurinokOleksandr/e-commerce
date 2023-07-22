import { FormFilterProducts } from '@/features/FormFilterProducts';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { getPagination } from '@/action/getPagination';
import { GridProduct } from '@/entities/ProductGrid';
import { Selection } from '@/entities/Selection';
import Button from '@/shared/ui/Button/Button';
import React from 'react';

export default async function Page({ searchParams }) {
    const paginateItems = await getPagination(searchParams.offset);

    return (
        <main className="flex my-5 disabled:bg-gray-800 ">
            <aside className="w-[270px]">
                <FormFilterProducts />
            </aside>
            <section className="w-full">
                <div className="mb-5">
                    <div className="flex justify-between bg-light-primary rounded p-3 w-full">
                        <Selection />
                        <div className="flex gap-4 items-center flex-wrap justify-start w-3/4">
                            <Button icon={<XMarkIcon width={20} />} name="Clear all" variant="third" size="small" className="" position />
                            <Button icon={<XMarkIcon width={20} />} name="Clear all" variant="third" size="small" position />
                            <Button icon={<XMarkIcon width={20} />} name="Clear all" variant="third" size="small" position />
                        </div>
                    </div>
                </div>
                <GridProduct paginateItems={paginateItems} searchParams={searchParams} />
            </section>
        </main>
    );
}
