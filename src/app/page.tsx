import { ProductListSwiper } from '@/entities/ProductListSwiper';
import { getBestsellers } from '@/action/getBestsellers';
import { getNewItems } from '@/action/getNewItems';
import { twMerge } from 'tailwind-merge';
import React from 'react';

export default async function Home() {
    const bestsellers = await getBestsellers(10);
    const newItem = await getNewItems(10);

    return (
        <main className="max-w-[1140px] w-[90%] xl:max-w-[1300px] xl:w-[90%] mx-auto pt-10">
            <section className={twMerge('my-5 flex flex-col gap-y-10')}>
                <ProductListSwiper
                    subTitle="Не пропустите актуальные предложения до конца марта."
                    title="Лучшие продажи"
                    row={bestsellers}
                />
                <ProductListSwiper
                    subTitle="Не пропустите актуальные предложения до конца марта."
                    title="Новинки товаров"
                    row={newItem}
                />
            </section>
        </main>
    );
}
