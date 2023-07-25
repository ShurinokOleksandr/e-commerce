'use client';

import { useCartStore, ProductType } from '@/entities/Product';
import Typography from '@/shared/ui/Typography/ui/Typography';
import Button from '@/shared/ui/Button/Button';
import React from 'react';

interface DetailsProductCardProps {
    data:ProductType
}
export function DetailsProductCard({ data }:DetailsProductCardProps) {
    const addToCart = useCartStore((state) => state.addToCart);
    const cartItem = {
        images: data.images,
        price: data.price,
        name: data.name,
        id: data.id,
        count: 1,
    };
    return (
        <div className="">
            <div className="flex flex-col gap-y-3  ">
                <Typography text={data.name} size="md" />
                <div className="flex  divide-x-2">
                    <div className="flex px-2">
                        <Typography text="Название Продукта: " className="font-semibold" size="xs" />
                        <Typography text={data.name} size="xs" />
                    </div>
                    <div className="flex px-2">
                        <Typography className="font-semibold" text="Артикул Коде: " size="xs" />
                        <Typography text={data.vendor_code} size="xs" />
                    </div>
                </div>
                <Typography text={`${data.price}$`} variant="hot" size="lg" />
                <Typography text={`На складе ${data.in_stock}`} className="w-max p-5 rounded-2xl" variant="stock" size="xs" />
                <Button onClick={() => addToCart(cartItem)} name="Добавить в корзину" variant="addCart" />
            </div>
        </div>
    );
}
