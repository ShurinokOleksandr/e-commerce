'use client';

import Typography from '@/shared/ui/Typography/ui/Typography';
import { useCartStore } from '@/entities/Product';
import Button from '@/shared/ui/Button/Button';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { ProductType } from '../types/Product';

interface ProductProps extends ProductType {
    className?:string;
}

export function Product(props:ProductProps) {
    const addToCart = useCartStore((state) => state.addToCart);
    const {
        name = 'Название отсутсвует',
        images = ' ',
        vendor_code,
        className,
        in_stock,
        price,
        id,
    } = props;
    const handleClickAddToCart = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addToCart({
            count: 1, images, price, name, id,
        });
    };

    return (
        <div className={twMerge('w-full h-full flex-shrink-0 py-2 px-5 border xl:hover:animate-pulse', className)}>
            <Link href={`/product/${id}`}>
                <div className=" h-40 relative ">
                    <Image
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfbOzSQ8dVKUHm__OTVgnNXB6qFNAb7wMR3g&usqp=CAU"
                        className="w-full h-full rounded-tl-3xl rounded-br-3xl  rounded-bl-md rounded-tr-md"
                        alt="asi"
                        fill
                    />
                </div>
                <div className=" items-start  gap-y-2">
                    <Typography className="font-semibold truncate" text={name} size="sm" />
                    <Typography text={`Код:${vendor_code}`} size="xs" />
                    <Typography text={`В наличии: ${in_stock}`} variant="stock" size="xs" />
                    <Typography text={`$ ${price}`} variant="hot" size="md" />
                    <Button
                        onClick={(e) => handleClickAddToCart(e)}
                        variant="addCart"
                        name="Добавить"
                        size="full"
                    />
                </div>
            </Link>

        </div>
    );
}
