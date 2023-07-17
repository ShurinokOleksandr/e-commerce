'use client';

import { FormFilterProducts } from '@/features/FormFilterProducts';
import { useProductCartStore } from '@/features/ProductCart';
import { XMarkIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react';
import { Selection } from '@/entities/Selection';
import Button from '@/shared/ui/Button/Button';

import { Product } from '../../entities/Product';

export default function Page() {
    return (
        <main className="flex my-5 ">

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
                <section className="border">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full">
                        <Product />
                        <Product />
                    </div>
                </section>
            </section>
        </main>
    );
}
