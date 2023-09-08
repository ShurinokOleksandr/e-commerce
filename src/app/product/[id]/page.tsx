import TabsDetailsProductCard from '@/entities/DetailsProductCard/ui/TabsDetailsProductCard';
import { DetailsProductCard } from '@/entities/DetailsProductCard';
import { ProductListSwiper } from '@/entities/ProductListSwiper';
import { getProductById } from '@/action/getProductById';
import { getBestsellers } from '@/action/getBestsellers';
import { BreadCrumbs } from '@/entities/Breadcrumbs';
import { Comment } from '@/features/CommentSystem';
import { ProductType } from '@/entities/Product';
import { SwiperImage } from '@/entities/Swiper';
import React from 'react';

export default async function Page({ params }: { params: { id: string } }) {
    const data:ProductType = await getProductById(params.id);
    const bestsellers = await getBestsellers(10);

    return (
        <main className="drop-shadow-2xl max-w-[1140px]  w-[90%] xl:max-w-[1300px] xl:w-[90%] mx-auto ">
            <div className=" ">
                <BreadCrumbs name={data.name} />
                <section className="bg-white p-10">
                    <div className="flex gap-12 border-b pb-10 mb-10">
                        <SwiperImage data={data.images} />
                        <div className="flex flex-col gap-y-5 ">
                            <DetailsProductCard data={data} />
                            <TabsDetailsProductCard data={data} />
                        </div>
                    </div>
                    <ProductListSwiper
                        subTitle="Не пропустите актуальные предложения до конца марта."
                        title="Лучшие продажи"
                        row={bestsellers}
                    />
                    <div className="my-5">
                        <Comment />
                    </div>

                </section>
            </div>
        </main>
    );
}
