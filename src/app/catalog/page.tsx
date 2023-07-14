import { FormFilterProducts } from '@/features/FormFilterProducts';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ProductCart } from '@/entities/ProductCart';
import { Selection } from '@/entities/Selection';
import Button from '@/shared/ui/Button/Button';
import React from 'react';

export default function Page() {
    return (
        <main className="flex my-5 ">

            <aside className="w-[270px] mx-5">
                <FormFilterProducts />
            </aside>
            <section className="w-full">
                <div className="mb-5">
                    <div className="flex justify-between bg-light-primary rounded p-3 w-full">
                        <Selection />
                        <div className="flex flex-wrap justify-start w-3/4">
                            <Button icon={<XMarkIcon width={20} />} name="Clear all" position />
                            <Button icon={<XMarkIcon width={20} />} name="Clear all" position />
                            <Button icon={<XMarkIcon width={20} />} name="Clear all" position />
                        </div>
                    </div>
                </div>
                <section className="border">

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full">
                        <ProductCart />
                        <ProductCart />
                    </div>
                </section>
            </section>
        </main>
    );
}
