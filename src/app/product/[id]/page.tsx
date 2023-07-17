import TabsDetailsProductCard from '@/entities/DetailsProductCard/ui/TabsDetailsProductCard';
import { DetailsProductCard } from '@/entities/DetailsProductCard';
import { BreadCrumbs } from '@/entities/Breadcrumbs';
import { SwiperImage } from '@/entities/Swiper';
import React from 'react';

export default function Page({ params }: { params: { id: string } }) {
    // const data = await getBestsellers(params.id);

    return (
        <main className="drop-shadow-2xl ">
            <div className=" ">
                <BreadCrumbs name="NAME" />
                <section className="bg-white p-10">
                    <div className="flex gap-12">
                        <SwiperImage />
                        <div className="flex flex-col gap-y-5 ">
                            <DetailsProductCard />
                            <TabsDetailsProductCard />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
