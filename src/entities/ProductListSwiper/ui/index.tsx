'use client';

import Typography from '@/shared/ui/Typography/ui/Typography';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { ShoppingCartItem } from '@/shared/types/Product';
import { Swiper } from '@/shared/ui/Swiper/ui/Swiper';
import Button from '@/shared/ui/Button/Button';
import Link from 'next/link';
import React from 'react';

type RowData = {
    rows: ShoppingCartItem[];
};
interface ProductListSwiperProps {
    row:RowData
    title:string;
    subTitle:string;
}

export function ProductListSwiper({
    subTitle, title, row,
}:ProductListSwiperProps) {
    return (
        <section>
            <header>
                <div className=" w-full  md:flex justify-between ">
                    <div className="my-5">
                        <Typography
                            text={title}
                            size="md"
                        />
                        <Typography
                            text={subTitle}
                            size="xs"
                        />
                    </div>
                    <div className="my-auto">
                        <Link href="/product">
                            <Button
                                icon={<ArrowRightIcon width={15} />}
                                position={false}
                                name="View all"
                                variant="third"
                            />
                        </Link>
                    </div>
                </div>
            </header>
            <Swiper data={row.rows} />
        </section>
    );
}
